import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Contact form submission received and stored
      // Messages are saved and can be retrieved for richtoby2020@gmail.com
      console.log("New contact form submission for richtoby2020@gmail.com:", contact);
      
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contacts" });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    // In a real application, you would serve an actual resume file
    // For now, we'll just return a success message
    res.json({ 
      success: true, 
      message: "Resume download would be triggered here",
      downloadUrl: "/assets/resume.pdf" 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
