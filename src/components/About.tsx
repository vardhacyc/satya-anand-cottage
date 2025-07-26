import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Mountain, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-mountain-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/lovable-uploads/129bb269-861e-4469-b20f-55d7b2316319.png" 
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-up">
            About Our Peaceful Retreat
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Nestled in the heart of Coonoor's pristine hills, Satya Anand Cottage offers a unique 
            sanctuary where traditional values meet modern comfort. Our commitment to pure vegetarian 
            living and alcohol-free environment creates the perfect space for rejuvenation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 border-0 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 rounded-3xl glass-morphism group animate-scale-in">
            <CardContent className="pt-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-mountain">
                <Leaf className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Pure Vegetarian</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fresh, organic vegetarian cuisine prepared with locally sourced ingredients
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 rounded-3xl glass-morphism group animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="pt-6">
              <div className="w-20 h-20 bg-gradient-to-br from-mountain-blue to-primary rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-mountain">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Non-Alcoholic</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A serene, family-friendly environment promoting wellness and mindfulness
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 rounded-3xl glass-morphism group animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="pt-6">
              <div className="w-20 h-20 bg-gradient-to-br from-mountain-green to-mountain-blue rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-mountain">
                <Mountain className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Mountain Views</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Panoramic views of the Nilgiri mountains from every corner of our property
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 rounded-3xl glass-morphism group animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <CardContent className="pt-6">
              <div className="w-20 h-20 bg-gradient-to-br from-mountain-orange to-primary rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-mountain">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Family Friendly</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Spacious accommodations perfect for families and groups seeking peace
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="glass-morphism rounded-3xl p-8 md:p-12 shadow-glass animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 float-animation"></div>
              <h3 className="text-3xl font-bold text-card-foreground mb-6 relative">
                Our Story & Philosophy
              </h3>
              <div className="space-y-6 text-muted-foreground relative">
                <p className="leading-relaxed">
                  Founded with the vision of creating a harmonious blend of comfort and consciousness, 
                  Satya Anand Cottage has been welcoming guests since 2010. Our name, meaning "Truth and Bliss," 
                  reflects our commitment to authentic experiences and genuine hospitality.
                </p>
                <p className="leading-relaxed">
                  Located in the picturesque hill station of Coonoor, we offer an escape from the hustle 
                  of city life. Our cottage maintains traditional Indian values while providing modern 
                  amenities, ensuring every guest experiences the perfect balance of comfort and serenity.
                </p>
                <p className="leading-relaxed">
                  We believe that travel should nourish both body and soul. That's why every meal is 
                  prepared with love using fresh, local ingredients, and our alcohol-free environment 
                  promotes clear minds and peaceful hearts.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 glass-morphism rounded-3xl hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold gradient-text mb-2">15+</div>
                <div className="text-sm text-muted-foreground font-medium">Years of Service</div>
              </div>
              <div className="text-center p-6 glass-morphism rounded-3xl hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold gradient-text mb-2">1000+</div>
                <div className="text-sm text-muted-foreground font-medium">Happy Guests</div>
              </div>
              <div className="text-center p-6 glass-morphism rounded-3xl hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold gradient-text mb-2">4.8</div>
                <div className="text-sm text-muted-foreground font-medium">Average Rating</div>
              </div>
              <div className="text-center p-6 glass-morphism rounded-3xl hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-sm text-muted-foreground font-medium">Pure Vegetarian</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;