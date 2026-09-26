import { Router, Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

// Initialize the Gemini SDK
// It automatically picks up GEMINI_API_KEY from the environment
const ai = new GoogleGenAI({});

router.post('/generate', async (req: Request, res: Response): Promise<any> => {
  try {
    const { careerTitle } = req.body;
    if (!careerTitle) {
      return res.status(400).json({ error: 'careerTitle is required' });
    }

    const prompt = `
      Act as an expert career counselor and curriculum designer. Generate a comprehensive roadmap to become a ${careerTitle}.
      Format the output strictly as a valid JSON array of objects representing milestones.
      Each milestone object MUST have the following structure:
      {
        "id": "a unique short string like m1",
        "title": "milestone title",
        "duration": "e.g. Weeks 1-4",
        "description": "a detailed description of what to learn",
        "skills": ["Array", "of", "skills", "learned"],
        "resources": [{"name": "Resource Name", "type": "Course or Book or Certification"}],
        "projects": ["Array", "of", "project", "ideas"],
        "tasks": ["Array", "of", "actionable", "tasks"]
      }
      Provide 3 to 4 milestones. Do not include markdown blocks like \`\`\`json. Just output the raw JSON array.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    let textResponse = response.text || "[]";
    
    // Clean up any potential markdown formatting the AI might add despite instructions
    if (textResponse.startsWith('```json')) {
      textResponse = textResponse.replace(/```json\n?/, '').replace(/```$/, '').trim();
    } else if (textResponse.startsWith('```')) {
        textResponse = textResponse.replace(/```\n?/, '').replace(/```$/, '').trim();
    }

    const roadmapData = JSON.parse(textResponse);

    res.json({ roadmap: roadmapData });
  } catch (error) {
    console.error('Error generating AI roadmap:', error);
    res.status(500).json({ error: 'Failed to generate roadmap' });
  }
});

export default router;
