// src/components/sections/ContactSection.tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageSquare } from 'lucide-react'; // MessageSquare for WhatsApp
import { ScrollAnimatedComponent } from '@/components/ui/ScrollAnimatedComponent';

// Replace with your actual contact details
const CONTACT_PHONE = "+15551234567"; 
const CONTACT_PHONE_DISPLAY = "+1 (555) 123-4567";
const WHATSAPP_NUMBER = "15551234567"; // International format without '+' or spaces for wa.me link
const WHATSAPP_MESSAGE = "Hello! I'm interested in your construction services.";

export function ContactSection({ id }: { id: string }) {
  return (
    <section id={id} className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimatedComponent animationType="fadeIn" className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Contact us today for a consultation.
          </p>
        </ScrollAnimatedComponent>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollAnimatedComponent animationType="slideInLeft">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-accent text-accent-foreground mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl text-primary">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-4">
                  Speak directly with our team.
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                  <a href={`tel:${CONTACT_PHONE}`}>
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </ScrollAnimatedComponent>

          <ScrollAnimatedComponent animationType="slideInRight">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-accent text-accent-foreground mb-4">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl text-primary">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-4">
                  Send us a message on WhatsApp.
                </p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </ScrollAnimatedComponent>
        </div>
      </div>
    </section>
  );
}
