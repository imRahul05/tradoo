"use client";
import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { AnimatedThemeToggler } from './ui/animated-theme-toggler';

export function Nav() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'UseCase', url: '#', icon: Briefcase },
    { name: 'Contact', url: '#', icon: FileText }
  ]

  return  <NavBar items={navItems} />

  
  
}