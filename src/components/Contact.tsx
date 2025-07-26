import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Users, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you soon to confirm your reservation.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-mountain-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact & Reservations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-mountain-green mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to experience the tranquility of Satya Anand Cottage? Get in touch with us 
            for reservations or any inquiries about your upcoming stay.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-card-foreground">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Satya Anand Cottage<br />
                  Brooklands Rd, Alwarpet<br />
                  Coonoor, Tamil Nadu 643103<br />
                  India
                </p>
                <p className="text-sm text-muted-foreground">
                  Located 15 minutes from Coonoor railway station and easily accessible by road from Ooty (19 km) and Mettupalayam (28 km).
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg text-card-foreground">
                    <Phone className="h-5 w-5 text-primary mr-2" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+91 9892701200</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg text-card-foreground">
                    <Mail className="h-5 w-5 text-primary mr-2" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">info@satyaanandcottage.com</p>
                  <p className="text-muted-foreground">bookings@satyaanandcottage.com</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-card-foreground">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  Reception Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Check-in:</strong> 2:00 PM onwards</p>
                  <p><strong>Check-out:</strong> 11:00 AM</p>
                  <p><strong>Front Desk:</strong> 24/7 available</p>
                  <p><strong>Restaurant:</strong> 7:00 AM - 10:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <Card className="border-0 shadow-mountain">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Make a Reservation</CardTitle>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-1">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-1">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-1">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9892701200"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium text-card-foreground mb-1">
                      Check-in Date *
                    </label>
                    <Input
                      id="checkIn"
                      name="checkIn"
                      type="date"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium text-card-foreground mb-1">
                      Check-out Date *
                    </label>
                    <Input
                      id="checkOut"
                      name="checkOut"
                      type="date"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-card-foreground mb-1">
                      Guests
                    </label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="10"
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="2"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-1">
                    Special Requests
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any special requirements or requests..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full text-lg py-6 shadow-soft">
                  Send Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-card rounded-2xl shadow-soft">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-card-foreground mb-2">Group Bookings</h3>
            <p className="text-sm text-muted-foreground">Special rates available for groups of 8+ people</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl shadow-soft">
            <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-card-foreground mb-2">Advance Booking</h3>
            <p className="text-sm text-muted-foreground">Book 30 days in advance for best rates</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl shadow-soft">
            <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-card-foreground mb-2">Quick Response</h3>
            <p className="text-sm text-muted-foreground">We respond to all inquiries within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;