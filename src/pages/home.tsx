import { motion } from 'framer-motion';
import { ArrowRight, Check, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export function Home() {
  const features = [
    {
      icon: <Globe className="h-10 w-10 text-indigo-500" />,
      title: 'Instant Nameservers',
      description:
        'Get Cloudflare nameservers for your domain in seconds, not hours.',
    },
    {
      icon: <Check className="h-10 w-10 text-indigo-500" />,
      title: 'Secure & Reliable',
      description:
        "Powered by Cloudflare's global network for maximum security and uptime.",
    },
    {
      icon: <Globe className="h-10 w-10 text-indigo-500" />,
      title: 'Easy Management',
      description:
        'Simple dashboard to manage all your domains and nameservers.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Generate Cloudflare Nameservers{' '}
                  <span className="gradient-text">Instantly</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Get Cloudflare nameservers for your domains with just a few
                  clicks. Fast, secure, and reliable.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto lg:mr-0 relative"
            >
              <div className="w-full h-[350px] rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-lg bg-card flex items-center justify-center overflow-hidden">
                  <div className="w-full max-w-md p-6 glass-effect rounded-lg">
                    <div className="space-y-2 mb-4">
                      <h3 className="text-xl font-bold">Domain Nameservers</h3>
                      <p className="text-sm text-muted-foreground">
                        example.com
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="p-2 bg-background/20 rounded-md">
                        ns1.cloudflare.com
                      </div>
                      <div className="p-2 bg-background/20 rounded-md">
                        ns2.cloudflare.com
                      </div>
                      <div className="p-2 bg-background/20 rounded-md">
                        ns3.cloudflare.com
                      </div>
                      <div className="p-2 bg-background/20 rounded-md">
                        ns4.cloudflare.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Everything You Need
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our nameserver generator provides all the tools you need to
                manage your domains effectively.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Generate your Cloudflare nameservers now and take control of
                your domains.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="gradient">
                <Link to="/submit">Submit Your Domain</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
