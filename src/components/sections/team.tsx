'use client'

import { motion } from 'framer-motion'

interface TeamMember {
  name: string
  role: string
  type: 'founder' | 'operations' | 'product' | 'advisor'
  bio?: string
  image?: string
}

const team: TeamMember[] = [
  {
    name: 'Angus Sewell McCann',
    role: 'Founder',
    type: 'founder',
    bio: 'Driving innovation in AI-powered sales communication',
    image: '/team/Angus%20Sewell%20McCann%20Headshot.jpg'
  },
  {
    name: 'Oma Nwanyanwu',
    role: 'Operations Manager',
    type: 'operations',
    bio: 'Streamlining processes and ensuring seamless delivery',
    image: '/team/Oma%20Nwanyanwu%20Headshot.jpg'
  },
  {
    name: 'Ini Daniel',
    role: 'Product Manager',
    type: 'product',
    bio: 'Crafting intuitive and powerful user experiences',
    image: '/team/Ini%20Daniel%20Headshot.jpg'
  },
  {
    name: 'Eric Stopper',
    role: 'Advisor',
    type: 'advisor',
    bio: 'Host of PulseOX podcast & Co-founder of Profitibull. Shaping our sales language to create genuine connections',
    image: '/team/Eric%20Stopper%20Headshot.jpg'
  },
  {
    name: 'Owen Foster',
    role: 'Advisor',
    type: 'advisor',
    bio: 'Principal at Foster Hospitality Companies. Bringing hospitality-driven approach to customer touchpoints',
    image: '/team/Owen%20Foster%20Headshot.jpeg'
  },
  {
    name: 'Duffy Young',
    role: 'Advisor',
    type: 'advisor',
    bio: 'Founder & CEO of Profitable Automation. Building scalable systems for authentic engagement',
    image: '/team/Duffy%20Young%20Headshot.jpg'
  },
  {
    name: 'Phil Murphy',
    role: 'Advisor',
    type: 'advisor',
    bio: 'Co-founder of Profitable. Crafting human-centered AI automation for meaningful interactions',
    image: '/team/Phil%20Murphy%20Headshot.jpeg'
  }
]

const roleColors = {
  founder: 'from-brand via-brand-purple to-brand-blue',
  operations: 'from-emerald-500 via-teal-500 to-cyan-500',
  product: 'from-violet-500 via-purple-500 to-fuchsia-500',
  advisor: 'from-amber-500 via-orange-500 to-red-500'
}

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl bg-background/80 backdrop-blur-sm border border-border/50">
        <div className="flex flex-col items-center p-6">
          {/* Image Container */}
          <div className="relative mb-4 w-40 h-40">
            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${roleColors[member.type]} opacity-10 blur-xl`} />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border/50">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
                    member.name === 'Owen Foster' ? 'object-[center_25%]' : 'object-center'
                  }`}
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-brand/5 via-brand-purple/5 to-brand-blue/5" />
              )}
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center">
            <h3 className={`text-xl font-semibold mb-1 bg-gradient-to-br ${roleColors[member.type]} bg-clip-text text-transparent`}>
              {member.name}
            </h3>
            <p className="text-sm font-medium text-muted-foreground mb-2">
              {member.role}
            </p>
            {member.bio && (
              <p className="text-sm text-muted-foreground/80 max-w-sm">
                {member.bio}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function TeamSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-background/80 via-background/60 to-background" />
      </div>

      <div className="container px-4 sm:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3 sm:mb-4 bg-gradient-to-br from-brand via-brand-purple to-brand-blue bg-clip-text text-transparent">
              Where human creativity meets AI precision.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              We craft the creative strategies that guide our AI, because true innovation starts with human insight.
            </p>
          </motion.div>
        </div>

        {/* Core Team */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto mb-8 sm:mb-12">
          {team
            .filter(member => member.type !== 'advisor')
            .map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
        </div>

        {/* Advisors */}
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2 text-muted-foreground">
            Our Advisors
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground/80">
            Industry experts guiding our vision and strategy
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {team
            .filter(member => member.type === 'advisor')
            .map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
        </div>
      </div>
    </section>
  )
} 