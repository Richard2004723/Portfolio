import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-slate-800">
                Let's work together
              </h3>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you need UI/UX design 
                for your mobile app, a responsive website, or brand identity design, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail size={20} className="text-blue-600 mr-4" />
                  <span>richtoby2020@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="text-blue-600 mr-4" />
                  <span>+234 802 665 8090</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={20} className="text-blue-600 mr-4" />
                  <span>Ota, Ogun State, Nigeria</span>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  style={{ 
                    backgroundColor: "hsl(221, 83%, 53%, 0.1)",
                    color: "hsl(221, 83%, 53%)"
                  }}
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  style={{ 
                    backgroundColor: "hsl(221, 83%, 53%, 0.1)",
                    color: "hsl(221, 83%, 53%)"
                  }}
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  style={{ 
                    backgroundColor: "hsl(221, 83%, 53%, 0.1)",
                    color: "hsl(221, 83%, 53%)"
                  }}
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div className="slide-up">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name"
                            className="px-4 py-3 border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your.email@example.com"
                            className="px-4 py-3 border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={5}
                            placeholder="Tell me about your project..."
                            className="px-4 py-3 border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
                    style={{ 
                      backgroundColor: "hsl(221, 83%, 53%)",
                      color: "white"
                    }}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
