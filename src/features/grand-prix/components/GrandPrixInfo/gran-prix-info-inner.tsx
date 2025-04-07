"use client";

import { F1LightsLoader } from "@/components/Loader";
import { GrandPrix, QualifyingResult, Sprint } from "@/types/types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import GrandPrixInfoAside from "./grand-prix-info-aside";
import GrandPrixInfoTabs from "./grand-prix-info-tabs";

type Props = {
  gp: GrandPrix;
  qualifying: QualifyingResult[];
  sprint: Sprint;
  error: unknown;
  isLoading: boolean;
  winnerColor: string;
};

const GrandPrixInfoInner = ({ gp, qualifying, sprint, error, isLoading, winnerColor }: Props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLTableElement>(null);
  const circuitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the main content
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    // Animate the results table rows
    if (resultsRef.current) {
      const rows = resultsRef.current.querySelectorAll("tr");
      if (rows.length > 0) {
        gsap.fromTo(
          rows,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: resultsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }

    // Animate the circuit info
    if (circuitRef.current) {
      const elements = circuitRef.current.querySelectorAll(".animate-in");
      if (elements.length > 0) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: circuitRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [gp]);


  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading || !gp || error) {
    return <F1LightsLoader />;
  }
  return (
    <main className="container mx-auto px-4 py-8" ref={mainRef}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1" ref={circuitRef}>
          <GrandPrixInfoAside
            country={gp.Circuit.Location.country}
            locality={gp.Circuit.Location.locality}
            time={gp.time.replace("Z", " UTC")}
            season={gp.season}
            date={formatDate(gp.date)}
            circuitUrl={gp.Circuit.url}
            circuitName={gp.Circuit.circuitName}
            round={gp.round}
            winnerColor={winnerColor}
            circuitId={gp.Circuit.circuitId}
          />
        </div>
        <GrandPrixInfoTabs gp={gp} qualifying={qualifying} sprint={sprint} resultsRef={resultsRef} />
      </div>
    </main>
  );
};

export default GrandPrixInfoInner;
