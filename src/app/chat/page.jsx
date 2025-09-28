"use client";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, Search, ChefHat } from "lucide-react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, duration: 0.5 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const cardHoverVariants = {
  hover: {
    y: -5,
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeInOut" }
  }
};



export default function SidebarDemo() {
  const links = [
    {
      label: "AI Chat",
      href: "/chat",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Go Back",
      href: "/dashboard",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        Acet Labs
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  const showSkeleton = false; // toggle skeleton / real dashboard

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 pt-24"
    >
      {/* Navigation
      <motion.nav
        variants={itemVariants}
        className="bg-white/80 backdrop-blur-lg shadow-sm p-4 rounded-2xl mb-8 mx-auto"
      >
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-5 w-5 text-blue-600" />
            </motion.div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ignite-AI
            </h1>
          </motion.div>

          <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </motion.nav> */}

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Welcome Message */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Chat With Our AI ChatBot !
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"
          />
        </motion.div>

        {/* Features Grid */}
        {showSkeleton ? (
          <div className="flex flex-col gap-4">
            {/* Skeleton Top Row */}
            <div className="flex gap-2">
              {[...new Array(4)].map((_, idx) => (
                <div
                  key={"first-array-demo-1" + idx}
                  className="h-20 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
                />
              ))}
            </div>
            {/* Skeleton Bottom Row */}
            <div className="flex gap-2">
              {[...new Array(2)].map((_, idx) => (
                <div
                  key={"second-array-demo-1" + idx}
                  className="h-40 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
                />
              ))}
            </div>
          </div>
        ) : (
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4"
              >
                <Search className="h-6 w-6 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Ask anything, create anything
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get intelligent answers and creative solutions powered by advanced AI
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mb-4"
              >
                <ChefHat className="h-6 w-6 text-green-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Chat With Our AI !
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Deep research and analysis capabilities for comprehensive insights
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Search Area */}
        <motion.div
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20"
        >
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="text"
            placeholder="Ask me anything... What would you like to know?"
            className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg bg-white/50"
          />

          <motion.div className="flex gap-4 mt-6" variants={containerVariants}>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Search
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold border border-gray-300 hover:border-gray-400 transition-all"
            >
              To
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Particles Effect */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        className="fixed inset-0 pointer-events-none z-0"
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};
