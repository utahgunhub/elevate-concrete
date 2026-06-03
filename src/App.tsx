import { useEffect, useMemo, useState } from "react";
import { AboutPage } from "./routes/about";
import { ContactPage } from "./routes/contact";
import { CoveragePage } from "./routes/coverage";
import { FleetPage } from "./routes/fleet";
import { HomePage } from "./routes/index";
import { AccidentTowingPage } from "./routes/service-accident-towing";
import { DeadBatteryPage } from "./routes/service-dead-battery";
import { EmergencyTowingPage } from "./routes/service-emergency-towing";
import { EngineProblemsPage } from "./routes/service-engine-problems";
import { FlatTirePage } from "./routes/service-flat-tire";
import { FlatbedTowingPage } from "./routes/service-flatbed-towing";
import { FleetTowingPage } from "./routes/service-fleet-towing";
import { FuelDeliveryPage } from "./routes/service-fuel-delivery";
import { JumpStartsPage } from "./routes/service-jump-starts";
import { LockoutsPage } from "./routes/service-lockouts";
import { LongDistanceTowingPage } from "./routes/service-long-distance-towing";
import { RoadsideAssistancePage } from "./routes/service-roadside-assistance";
import { WinchOutsPage } from "./routes/service-winch-outs";
import { ServicesPage } from "./routes/services";

type RouteConfig = {
  title: string;
  description: string;
  component: () => JSX.Element;
};

const routes: Record<string, RouteConfig> = {
  "/": {
    title: "Service Towing Utah — 24/7 Towing & Roadside Assistance",
    description:
      "Professional 24-hour towing and roadside assistance across Utah County and Salt Lake County.",
    component: HomePage,
  },
  "/services": {
    title: "Towing Services — Service Towing Utah",
    description:
      "Accident recovery, flatbed towing, roadside assistance, and fleet transport across Utah County and Salt Lake County.",
    component: ServicesPage,
  },
  "/coverage": {
    title: "Service Area — Utah & Salt Lake County | Service Towing Utah",
    description:
      "Coverage map and city list for Service Towing Utah across Utah County and Salt Lake County.",
    component: CoveragePage,
  },
  "/fleet": {
    title: "We Buy Junk Cars — Service Towing Utah",
    description:
      "Cash for junk cars in Utah with quick quotes, free pickup, and fast payment.",
    component: FleetPage,
  },
  "/about": {
    title: "About — Service Towing Utah",
    description:
      "Utah-owned and operated. Licensed, insured, and built around a single idea: when you call, we go.",
    component: AboutPage,
  },
  "/contact": {
    title: "Contact Dispatch — Service Towing Utah",
    description:
      "Call (801) 900-3869 for 24/7 dispatch, or email Info@servicetowingutah.com for non-urgent requests.",
    component: ContactPage,
  },
  "/services/accident-towing": {
    title: "Accident Towing & Recovery — Service Towing Utah",
    description: "Professional accident towing and recovery in Utah County and Salt Lake County. Available 24/7.",
    component: AccidentTowingPage,
  },
  "/services/flatbed-towing": {
    title: "Flatbed Towing — Service Towing Utah",
    description: "Safe flatbed towing for any vehicle across Utah County and Salt Lake County. EV, AWD, and luxury-capable.",
    component: FlatbedTowingPage,
  },
  "/services/emergency-towing": {
    title: "Emergency Towing — Service Towing Utah",
    description: "24-hour emergency towing anywhere in Utah County and Salt Lake County. Fast dispatch, call now.",
    component: EmergencyTowingPage,
  },
  "/services/roadside-assistance": {
    title: "Roadside Assistance — Service Towing Utah",
    description: "24-hour roadside assistance in Utah including jump starts, lockouts, fuel delivery, and flat tire help.",
    component: RoadsideAssistancePage,
  },
  "/services/jump-starts": {
    title: "Jump Starts — Service Towing Utah",
    description: "Dead battery? We come to you and jump start your vehicle anywhere in Utah County and Salt Lake County.",
    component: JumpStartsPage,
  },
  "/services/lockouts": {
    title: "Car Lockout Service — Service Towing Utah",
    description: "Locked out of your car in Utah? We provide fast, damage-free lockout service 24 hours a day.",
    component: LockoutsPage,
  },
  "/services/fuel-delivery": {
    title: "Fuel Delivery — Service Towing Utah",
    description: "Out of gas in Utah? We deliver gasoline or diesel to your location anywhere in Utah County or Salt Lake County.",
    component: FuelDeliveryPage,
  },
  "/services/winch-outs": {
    title: "Winch-Outs & Recovery — Service Towing Utah",
    description: "Vehicle stuck off-road, in a ditch, or in snow? We provide winch-out and recovery service across Utah.",
    component: WinchOutsPage,
  },
  "/services/fleet-towing": {
    title: "Fleet Towing & Vehicle Transport — Service Towing Utah",
    description: "Reliable fleet towing and vehicle transport for businesses across Utah County and Salt Lake County.",
    component: FleetTowingPage,
  },
  "/services/long-distance-towing": {
    title: "Long-Distance Towing — Service Towing Utah",
    description: "Long-distance towing across Utah and neighboring states. Flatbed transport, competitive rates.",
    component: LongDistanceTowingPage,
  },
  "/services/dead-battery": {
    title: "Dead Battery Service — Service Towing Utah",
    description: "Won't start? We respond to dead battery calls 24 hours across Utah County and Salt Lake County.",
    component: DeadBatteryPage,
  },
  "/services/flat-tire": {
    title: "Flat Tire & Tire Change — Service Towing Utah",
    description: "Flat tire in Utah? We change your spare or tow you to a tire shop. Available 24/7.",
    component: FlatTirePage,
  },
  "/services/engine-problems": {
    title: "Engine Problems & Breakdown Towing — Service Towing Utah",
    description: "Engine warning, overheating, or stalled? Don't keep driving. Call us for breakdown towing in Utah.",
    component: EngineProblemsPage,
  },
};

const notFound: RouteConfig = {
  title: "Page Not Found — Service Towing Utah",
  description: "The page you're looking for doesn't exist.",
  component: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-primary">404</h1>
        <h2 className="mt-4 font-display text-2xl uppercase tracking-tight text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center bg-primary px-5 py-3 font-display uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  ),
};

function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
}

export default function App() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setPathname(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const route = useMemo(() => routes[pathname] ?? notFound, [pathname]);

  useEffect(() => {
    document.title = route.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute("content", route.description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = route.description;
      document.head.appendChild(meta);
    }
  }, [route]);

  const Page = route.component;
  return <Page />;
}
