import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Mountain, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-mountain-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Our Peaceful Retreat
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-mountain-green mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nestled in the heart of Coonoor's pristine hills, Satya Anand Cottage offers a unique 
            sanctuary where traditional values meet modern comfort. Our commitment to pure vegetarian 
            living and alcohol-free environment creates the perfect space for rejuvenation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 border-0 shadow-soft hover:shadow-mountain transition-all duration-300 hover:-translate-y-2">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-mountain-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Pure Vegetarian</h3>
              <p className="text-muted-foreground">
                Fresh, organic vegetarian cuisine prepared with locally sourced ingredients
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-soft hover:shadow-mountain transition-all duration-300 hover:-translate-y-2">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-mountain-blue to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Non-Alcoholic</h3>
              <p className="text-muted-foreground">
                A serene, family-friendly environment promoting wellness and mindfulness
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-soft hover:shadow-mountain transition-all duration-300 hover:-translate-y-2">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-mountain-green to-mountain-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Mountain Views</h3>
              <p className="text-muted-foreground">
                Panoramic views of the Nilgiri mountains from every corner of our property
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-soft hover:shadow-mountain transition-all duration-300 hover:-translate-y-2">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-mountain-orange to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Family Friendly</h3>
              <p className="text-muted-foreground">
                Spacious accommodations perfect for families and groups seeking peace
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-mountain">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-card-foreground mb-6">
                Our Story & Philosophy
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with the vision of creating a harmonious blend of comfort and consciousness, 
                  Satya Anand Cottage has been welcoming guests since 2010. Our name, meaning "Truth and Bliss," 
                  reflects our commitment to authentic experiences and genuine hospitality.
                </p>
                <p>
                  Located in the picturesque hill station of Coonoor, we offer an escape from the hustle 
                  of city life. Our cottage maintains traditional Indian values while providing modern 
                  amenities, ensuring every guest experiences the perfect balance of comfort and serenity.
                </p>
                <p>
                  We believe that travel should nourish both body and soul. That's why every meal is 
                  prepared with love using fresh, local ingredients, and our alcohol-free environment 
                  promotes clear minds and peaceful hearts.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-mountain-green/10 rounded-2xl">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years of Service</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-mountain-blue/10 to-primary/10 rounded-2xl">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Guests</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-mountain-green/10 to-mountain-blue/10 rounded-2xl">
                <div className="text-3xl font-bold text-primary">4.8</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-mountain-orange/10 to-primary/10 rounded-2xl">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Pure Vegetarian</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;