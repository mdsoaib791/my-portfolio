'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MenuList } from '@/data/sidenav-data';
import useActiveNav from '@/hooks/useActiveNav';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useRef, useState } from "react";
import Logo from '../../../../public/images/logo.svg';
import { Button } from "@/components/ui/button";
import { RiMenuLine, RiMenuUnfold3Line } from "react-icons/ri";
import { toggleNav } from "@/redux/slices/navSlice";

function Header() {
    const isOpen = useAppSelector((state) => state.nav.isOpen);
    const activeNav = useActiveNav(MenuList);
    const dispatch = useAppDispatch();
    const [openAccordion, setOpenAccordion] = useState<string | undefined>(undefined);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleAccordionChange = (value: string) => {
        setOpenAccordion(value === openAccordion ? undefined : value);
    };

    const handleMouseEnter = (itemId: string) => {
        if (!isOpen) {
            hoverTimeoutRef.current = setTimeout(() => {
                setHoveredItem(itemId);
            }, 300);
        }
    };

    const handleMouseLeave = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
        setHoveredItem(null);
    };

    useEffect(() => {
        return () => {
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
            }
        };
    }, []);


    return (
        <header className="bg-background border-b sticky top-0 z-10">
            <div className="container">
                <div className="flex items-center justify-between py-3">
                    <Link href="/" className='flex items-center'>
                        <Image src={Logo} width={150} height={40} alt='Logo' className="transition-all duration-300" />
                    </Link>
                    <div className="lg:hidden">
                        <Button variant="ghost" size="icon" onClick={() => dispatch(toggleNav())} className='text-2xl'>
                            {isOpen ? <RiMenuUnfold3Line /> : <RiMenuLine />}
                        </Button>
                    </div>

                    <nav className={`flex lg:gap-4 absolute lg:relative flex-col lg:translate-x-0 lg:flex-row bg-secondary lg:bg-transparent w-[240px] left-0 top-0 min-h-screen lg:min-h-0 duration-75 ${isOpen ? "translate-x-0 " : "translate-x-[-240px]"} lg:w-auto`}>
                        {MenuList.map((curItem, index) => {
                            const isDropdown = curItem.subItems;
                            const dropDownLinkClass = `text-sm font-normal flex items-center gap-2 p-2 border-b last:border-b-0 transition-all hover:bg-primary hover:text-white duration-200 ${activeNav.includes(curItem.path) ? 'bg-primary text-white' : ''}`;
                            const linkClass = `text-sm font-normal flex items-center gap-2 p-2  transition-all hover:text-primary duration-200 ${activeNav.includes(curItem.path) ? ' text-primary' : ''}`
                            return isDropdown ? (
                                <div key={`${curItem.id}-${index}-data`}
                                    onMouseEnter={() => handleMouseEnter(curItem.id)}
                                    onMouseLeave={handleMouseLeave}
                                    className="relative">
                                    <Accordion
                                        type="single"
                                        collapsible
                                        value={openAccordion}
                                        onValueChange={handleAccordionChange}>

                                        <AccordionItem value={curItem.id} className="border-b lg:border-b-0">
                                            <AccordionTrigger className={linkClass}>
                                                <span>{curItem.title}</span>
                                            </AccordionTrigger>
                                            {isOpen && (
                                                <AccordionContent className="mx-2 bg-slate-300 pb-0 rounded-none">
                                                    {curItem.subItems.map((subItem, subIndex) => (
                                                        <Link key={`${subItem.id}-${subIndex}-data`} href={subItem.path} className={`${dropDownLinkClass}`}>
                                                            <span>{subItem.title}</span>
                                                        </Link>
                                                    ))}
                                                </AccordionContent>
                                            )}
                                        </AccordionItem>
                                    </Accordion>
                                    {!isOpen && hoveredItem === curItem.id && (
                                        <div className="absolute left-0 top-full mt-1 bg-popover text-popover-foreground shadow-lg  py-0 min-w-[200px] z-50">
                                            {curItem.subItems.map((subItem, subIndex) => (
                                                <Link key={`${subItem.id}-${subIndex}-hover`} href={subItem.path} className={dropDownLinkClass}>
                                                    <span>{subItem.title}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link href={curItem.path} className={`${linkClass} border-b lg:border-b-0`}>
                                    <span>{curItem.title}</span>
                                </Link>

                            );
                        })}
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
