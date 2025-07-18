import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Badge } from './components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { Input } from './components/ui/input'
import { 
  Search, 
  MapPin, 
  Users, 
  Calendar, 
  Star, 
  ArrowRight, 
  Building2, 
  Coffee, 
  ShoppingBag, 
  Utensils,
  Music,
  Camera,
  Heart,
  MessageCircle,
  Plus
} from 'lucide-react'

const businessCategories = [
  { icon: Coffee, name: 'Cafés & Restaurants', count: 24, color: 'bg-amber-100 text-amber-700' },
  { icon: ShoppingBag, name: 'Retail & Shops', count: 18, color: 'bg-blue-100 text-blue-700' },
  { icon: Utensils, name: 'Food Vendors', count: 32, color: 'bg-green-100 text-green-700' },
  { icon: Music, name: 'Entertainment', count: 12, color: 'bg-purple-100 text-purple-700' },
  { icon: Camera, name: 'Services', count: 15, color: 'bg-pink-100 text-pink-700' },
  { icon: Building2, name: 'Professional', count: 9, color: 'bg-indigo-100 text-indigo-700' },
]

const ambassadors = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Community Connector',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    rating: 4.9,
    collaborations: 23,
    specialties: ['Events', 'Marketing', 'Social Media'],
    status: 'Available'
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Business Liaison',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 4.8,
    collaborations: 31,
    specialties: ['Partnerships', 'Strategy', 'Growth'],
    status: 'Busy'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Event Coordinator',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5.0,
    collaborations: 19,
    specialties: ['Events', 'Logistics', 'Community'],
    status: 'Available'
  },
]

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">ByWard Market</h1>
                  <p className="text-xs text-muted-foreground">Collaboration Hub</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Users className="h-4 w-4 mr-2" />
                Community
              </Button>
              <Button variant="ghost" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Events
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Join Platform
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm mb-6 bg-card">
              <span className="text-primary font-medium">✨ New</span>
              <span className="ml-2 text-muted-foreground">Enhanced collaboration features now live</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              Connect, Collaborate,{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Create Together
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the ByWard Market community where local businesses, event organizers, 
              and youth ambassadors come together to build something amazing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search businesses, events, or partners..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Button size="lg" className="h-12 px-8">
                Find Partners
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                150+ Active Businesses
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                25+ Youth Ambassadors
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-purple-500 rounded-full mr-2"></div>
                200+ Successful Collaborations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Categories */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Business Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover collaboration opportunities across diverse business sectors in the ByWard Market
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-card/80 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl ${category.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count} businesses
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Connect with local {category.name.toLowerCase()} for partnerships and events
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Youth Ambassadors */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Youth Ambassadors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with passionate young professionals who bridge communities and create opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ambassadors.map((ambassador) => (
              <Card key={ambassador.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16 ring-2 ring-primary/10">
                        <AvatarImage src={ambassador.avatar} alt={ambassador.name} />
                        <AvatarFallback>{ambassador.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {ambassador.name}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {ambassador.role}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge 
                      variant={ambassador.status === 'Available' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {ambassador.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{ambassador.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {ambassador.collaborations} collaborations
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {ambassador.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                    <Button size="sm" variant="outline">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Collaborating?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses and ambassadors creating meaningful partnerships in the ByWard Market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="h-12 px-8">
                Join as Business
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-white border-white hover:bg-white hover:text-primary">
                Become Ambassador
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold">ByWard Market Collaboration</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Connecting communities, creating opportunities, building the future together.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App