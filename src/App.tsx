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
  Plus,
  Filter,
  Bookmark,
  Share2,
  Clock,
  TrendingUp,
  Zap,
  Globe,
  ChevronRight,
  Play
} from 'lucide-react'

const businessCategories = [
  { 
    icon: Coffee, 
    name: 'Cafés & Restaurants', 
    count: 24, 
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
    image: 'https://images.unsplash.com/photo-1717065165653-bb853b7e6e7e?w=400&h=300&fit=crop'
  },
  { 
    icon: ShoppingBag, 
    name: 'Retail & Shops', 
    count: 18, 
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    image: 'https://images.unsplash.com/photo-1737125629908-193281d8db2d?w=400&h=300&fit=crop'
  },
  { 
    icon: Utensils, 
    name: 'Food Vendors', 
    count: 32, 
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
    image: 'https://images.unsplash.com/photo-1722498256999-c0061d9f1139?w=400&h=300&fit=crop'
  },
  { 
    icon: Music, 
    name: 'Entertainment', 
    count: 12, 
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
    image: 'https://images.unsplash.com/photo-1610562118850-ccdcc949588e?w=400&h=300&fit=crop'
  },
  { 
    icon: Camera, 
    name: 'Services', 
    count: 15, 
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
    image: 'https://images.unsplash.com/photo-1718224326658-489bbfbeb2ca?w=400&h=300&fit=crop'
  },
  { 
    icon: Building2, 
    name: 'Professional', 
    count: 9, 
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-gradient-to-br from-indigo-50 to-purple-50',
    image: 'https://images.unsplash.com/photo-1608360097628-e4ac588e4d14?w=400&h=300&fit=crop'
  },
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
    status: 'Available',
    verified: true,
    responseTime: '2h',
    location: 'ByWard Market'
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Business Liaison',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 4.8,
    collaborations: 31,
    specialties: ['Partnerships', 'Strategy', 'Growth'],
    status: 'Busy',
    verified: true,
    responseTime: '4h',
    location: 'Downtown Ottawa'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Event Coordinator',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5.0,
    collaborations: 19,
    specialties: ['Events', 'Logistics', 'Community'],
    status: 'Available',
    verified: true,
    responseTime: '1h',
    location: 'ByWard Market'
  },
]

const featuredEvents = [
  {
    id: 1,
    title: 'Summer Night Market',
    date: 'Jul 25, 2024',
    time: '6:00 PM',
    location: 'ByWard Square',
    image: 'https://images.unsplash.com/photo-1610562118850-ccdcc949588e?w=600&h=400&fit=crop',
    category: 'Food & Music',
    price: 'Free',
    attendees: 245,
    trending: true
  },
  {
    id: 2,
    title: 'Local Artisan Showcase',
    date: 'Jul 28, 2024',
    time: '2:00 PM',
    location: 'Market Building',
    image: 'https://images.unsplash.com/photo-1718224326658-489bbfbeb2ca?w=600&h=400&fit=crop',
    category: 'Arts & Crafts',
    price: '$15',
    attendees: 89,
    trending: false
  }
]

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Modern Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    ByWard
                  </h1>
                  <p className="text-xs text-gray-400">Collaboration Hub</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Users className="h-4 w-4 mr-2" />
                Community
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Calendar className="h-4 w-4 mr-2" />
                Events
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0 shadow-lg">
                <Plus className="h-4 w-4 mr-2" />
                Join Platform
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Dice/Fever Style */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-orange-900/20"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1610562118850-ccdcc949588e?w=1920&h=1080&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Trending Badge */}
          <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-6 py-3 text-sm mb-8 backdrop-blur-sm">
            <TrendingUp className="h-4 w-4 text-red-400 mr-2" />
            <span className="text-red-400 font-medium">Trending</span>
            <span className="ml-2 text-gray-300">250+ new collaborations this week</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-none">
            <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Discover
            </span>
            <span className="block bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Connect
            </span>
            <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Create
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
            The ultimate platform for ByWard Market collaborations. 
            <br className="hidden sm:block" />
            Where businesses, creators, and communities unite.
          </p>

          {/* Search Bar - BookMyShow Style */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative flex items-center bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-2">
                <div className="flex items-center flex-1">
                  <Search className="h-6 w-6 text-gray-400 ml-4 mr-3" />
                  <Input
                    placeholder="Search events, businesses, or partners..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-0 bg-transparent text-white placeholder:text-gray-400 text-lg h-14 focus-visible:ring-0"
                  />
                </div>
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0 h-14 px-8 rounded-xl shadow-lg">
                  <Zap className="h-5 w-5 mr-2" />
                  Explore
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <div className="h-3 w-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-300">150+ Active Businesses</span>
            </div>
            <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <div className="h-3 w-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-300">25+ Youth Ambassadors</span>
            </div>
            <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <div className="h-3 w-3 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-300">200+ Collaborations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section - Dice Style */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Featured Events
              </h2>
              <p className="text-gray-400 text-lg">Don't miss these amazing collaboration opportunities</p>
            </div>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              View All
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="group bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Event badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {event.trending && (
                      <Badge className="bg-red-500/90 text-white border-0 backdrop-blur-sm">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                    <Badge variant="secondary" className="bg-white/20 text-white border-0 backdrop-blur-sm">
                      {event.category}
                    </Badge>
                  </div>

                  {/* Action buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="ghost" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0 h-10 w-10 p-0">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0 h-10 w-10 p-0">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0 rounded-full h-16 w-16 p-0">
                      <Play className="h-6 w-6 ml-1" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                        {event.title}
                      </h3>
                      <div className="flex items-center text-gray-400 text-sm space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {event.time}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{event.price}</div>
                      <div className="text-sm text-gray-400">{event.attendees} attending</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0">
                      Join Event
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Categories - Modern Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Explore Categories
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover collaboration opportunities across diverse business sectors in the ByWard Market
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="group bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                        {category.count} businesses
                      </Badge>
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-white group-hover:text-red-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Connect with local {category.name.toLowerCase()} for partnerships and events
                    </p>
                    <Button variant="ghost" className="text-red-400 hover:text-white hover:bg-red-500/20 p-0 h-auto">
                      Explore Category
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Youth Ambassadors - Fever Style */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Meet Our Ambassadors
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Connect with passionate professionals who bridge communities and create opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ambassadors.map((ambassador) => (
              <Card key={ambassador.id} className="group bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden">
                <CardHeader className="pb-4 relative">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Avatar className="h-16 w-16 ring-2 ring-red-500/20 group-hover:ring-red-500/40 transition-all">
                          <AvatarImage src={ambassador.avatar} alt={ambassador.name} />
                          <AvatarFallback className="bg-gradient-to-br from-red-500 to-orange-500 text-white">
                            {ambassador.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {ambassador.verified && (
                          <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                            <div className="h-2 w-2 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-lg text-white group-hover:text-red-400 transition-colors">
                          {ambassador.name}
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                          {ambassador.role}
                        </CardDescription>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {ambassador.location}
                        </div>
                      </div>
                    </div>
                    <Badge 
                      variant={ambassador.status === 'Available' ? 'default' : 'secondary'}
                      className={ambassador.status === 'Available' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                      }
                    >
                      {ambassador.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-white">{ambassador.rating}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {ambassador.collaborations} collaborations
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      Responds in {ambassador.responseTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {ambassador.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-white/20 text-gray-300 hover:border-red-500/50 hover:text-red-400 transition-colors">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:border-white/30">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold & Modern */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl opacity-90 mb-12 font-light">
              Join hundreds of businesses and ambassadors creating meaningful partnerships in the ByWard Market
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="secondary" className="h-14 px-10 text-lg bg-white text-red-600 hover:bg-gray-100 border-0 shadow-xl">
                <Building2 className="h-5 w-5 mr-2" />
                Join as Business
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg text-white border-white/30 hover:bg-white/10 hover:border-white/50">
                <Users className="h-5 w-5 mr-2" />
                Become Ambassador
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg">
                <MapPin className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ByWard Market Collaboration
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Connecting communities, creating opportunities, building the future together.
            </p>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10">
                <Globe className="h-4 w-4 mr-2" />
                Website
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10">
                Privacy
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10">
                Terms
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App