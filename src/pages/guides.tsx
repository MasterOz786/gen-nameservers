"use client"

import { useState } from "react"
import { ExternalLink, BookOpen, Globe, Server } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../lib/utils"

function Guides() {
    const [activeTab, setActiveTab] = useState("Namecheap")
    const guides = [
        {
            provider: 'GoDaddy',
            icon: <Server className="h-10 w-10 text-indigo-500" />,
            steps: [
                'Sign in to your GoDaddy Domain Portfolio',
                'Select the domain you want to change',
                'Select DNS, then click on Nameservers',
                "Select 'I'll use my own nameservers'",
                'Enter your custom nameserver details',
                'Click Save and Continue',
                'If Domain Protection is enabled, verify your identity via 2SV or email'
            ],
            notes: [
                'DNS updates typically take effect within an hour',
                'Global propagation may take up to 48 hours',
                'Some domains may have special nameserver requirements'
            ],
            link: 'https://www.godaddy.com/help/change-nameservers-for-my-domains-664'
        },
        {
            provider: 'Namecheap',
            icon: <BookOpen className="h-10 w-10 text-indigo-500" />,
            steps: [
                'Log in to your Namecheap account',
                'Select Domain List from the left sidebar',
                'Click Manage next to your domain',
                "In the Nameservers section, select 'CustomDNS'",
                'Fill in the nameservers provided',
                'Click the green checkmark to save changes'
            ],
            notes: [
                'Changes may take up to 24-48 hours to propagate',
                'When switching nameservers, DNS records need manual setup',
                'Enter nameservers in ns1.example.tld format'
            ],
            link: 'https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-to-change-dns-for-a-domain/'
        },
        {
            provider: 'Hostinger',
            icon: <Globe className="h-10 w-10 text-indigo-500" />,
            steps: [
                'Log in to your Hostinger hPanel',
                'Go to the Domains section',
                'Click Manage next to your domain',
                'Select DNS/Nameservers from the sidebar',
                'Click Change Nameservers',
                "Select 'Change nameservers':",
                'Enter up to 4 custom nameservers',
                'Click Save to apply changes'
            ],
            notes: [
                'Changing nameservers transfers DNS management to the new provider',
                'Further DNS changes should be made with the new provider',
                'Allow time for DNS propagation'
            ],
            link: 'https://support.hostinger.com/en/articles/1696789-how-to-change-nameservers-at-hostinger'
        }
    ];


    const activeGuide = guides.find((guide) => guide.provider === activeTab)

    const handleTabClick = (provider: any) => {
        console.log("clicking", provider)
        setActiveTab(provider)
    }

    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-30"></div>
                <div className="container px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center text-center mb-12"
                    >
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-4">Documentation</div>
                        <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none mb-4">
                            Nameserver Configuration <span className="gradient-text">Guides</span>
                        </h1>
                        <p className="max-w-[700px] text-muted-foreground md:text-base">
                            Comprehensive step-by-step instructions for updating nameservers on popular hosting platforms. Please note
                            that DNS changes may take 24-48 hours to fully propagate.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-12 gap-6 mt-8">
                        {/* Sidebar Tabs */}
                        <motion.div
                            className="col-span-12 md:col-span-3 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {guides.map((guide) => (
                                <button
                                    key={guide.provider}
                                    onClick={() => handleTabClick(guide.provider)}
                                    type="button"
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 w-full",
                                        "hover:bg-muted/80 focus:outline-none z-10 ",
                                        "cursor-pointer relative",
                                        activeTab === guide.provider ? "bg-muted/60 text-primary font-medium" : "text-muted-foreground",
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "p-2 rounded-full transition-colors",
                                            activeTab === guide.provider ? "bg-primary/10  text-primary" : "text-muted-foreground",
                                        )}
                                    >
                                        {guide.icon}
                                    </div>
                                    <span className="font-medium whitespace-nowrap">{guide.provider}</span>
                                </button>
                            ))}
                        </motion.div>

                        {/* Content Area */}
                        <AnimatePresence mode="wait">
                            {activeGuide && (
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="col-span-12 md:col-span-9 bg-card rounded-lg p-6 border border-border"
                                >
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-lg font-medium mb-4">Steps to Update Nameservers</h3>
                                            <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                                                {activeGuide.steps.map((step, stepIndex) => (
                                                    <li key={stepIndex} className="text-left">
                                                        {step.startsWith("•") ? <span className="ml-4 block mt-1">{step.substring(2)}</span> : step}
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-medium mb-4">Important Notes</h3>
                                            <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                                                {activeGuide.notes.map((note, noteIndex) => (
                                                    <li key={noteIndex} className="text-left">
                                                        {note}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-6 border-t border-border">
                                            <a
                                                href={activeGuide.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer z-10 relative p-2"
                                            >
                                                View Official Documentation
                                                <ExternalLink className="h-4 w-4 ml-1" />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Guides

