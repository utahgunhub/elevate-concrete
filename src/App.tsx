import { useEffect, useMemo, useState, type JSX } from "react";
import { AboutPage } from "./routes/about";
import { ContactPage } from "./routes/contact";
import { ReviewPage } from "./routes/review";
import { AreasPage } from "./routes/areas";
import { DavisCountyPage, SaltLakeCountyPage, UtahCountyPage } from "./routes/area-pages";
import { HomePage } from "./routes/index";
import {
  ConcreteTearoutPage,
  DecorativeConcretePage,
  DrivewaysPage,
  FlatworkPage,
  PatiosPage,
  RvPadsPage,
  SidewalksPage,
  SmallFootingsFoundationsPage,
  WalkwaysPage,
} from "./routes/concrete-service-pages";
import { GalleryPage } from "./routes/gallery";
import { ServicesPage } from "./routes/services";
import { COMPANY_NAME } from "./lib/site";

type RouteConfig = {
  title: string;
  description: string;
  component: () => JSX.Element;
};

const routes: Record<string, RouteConfig> = {
  "/": {
    title: `${COMPANY_NAME} — Concrete Flatwork in Utah`,
    description:
      "Professional concrete flatwork, tearout, and haul off across Utah County, Salt Lake County, and Davis County.",
    component: HomePage,
  },
  "/services": {
    title: `Concrete Services — ${COMPANY_NAME}`,
    description:
      "Driveways, patios, sidewalks, RV pads, decorative concrete, tearout, haul off, and small footings across Utah.",
    component: ServicesPage,
  },
  "/areas": {
    title: `Service Areas — ${COMPANY_NAME}`,
    description:
      "Concrete services in Utah County, Salt Lake County, and Davis County.",
    component: AreasPage,
  },
  "/about": {
    title: `About — ${COMPANY_NAME}`,
    description:
      "Utah concrete flatwork company focused on durable finishes, tearout, and reliable scheduling.",
    component: AboutPage,
  },
  "/contact": {
    title: `Contact — ${COMPANY_NAME}`,
    description:
      "Call (801) 599-9951 or email for concrete flatwork estimates in Utah County, Salt Lake County, and Davis County.",
    component: ContactPage,
  },
  "/review": {
    title: `Leave a Review — ${COMPANY_NAME}`,
    description:
      "Rate your Elevate Concrete experience. Share feedback or leave a Google review for our Utah flatwork team.",
    component: ReviewPage,
  },
  "/gallery": {
    title: `Project Gallery — ${COMPANY_NAME}`,
    description:
      "Photos of concrete flatwork, tearout, driveways, patios, and decorative projects across Utah.",
    component: GalleryPage,
  },
  "/services/concrete-tearout": {
    title: `Concrete Tearout & Haul Off — ${COMPANY_NAME}`,
    description: "Concrete removal and haul off in Utah. Prep your site for new flatwork.",
    component: ConcreteTearoutPage,
  },
  "/services/flatwork": {
    title: `Concrete Flatwork — ${COMPANY_NAME}`,
    description: "Professional concrete flatwork for residential and commercial projects in Utah.",
    component: FlatworkPage,
  },
  "/services/driveways": {
    title: `Concrete Driveways — ${COMPANY_NAME}`,
    description: "New and replacement concrete driveways in Utah County, Salt Lake, and Davis County.",
    component: DrivewaysPage,
  },
  "/services/patios": {
    title: `Concrete Patios — ${COMPANY_NAME}`,
    description: "Backyard and outdoor concrete patios with quality finishes in Utah.",
    component: PatiosPage,
  },
  "/services/rv-pads": {
    title: `Concrete RV Pads — ${COMPANY_NAME}`,
    description: "Durable RV, trailer, and equipment pads across the Wasatch Front.",
    component: RvPadsPage,
  },
  "/services/walkways": {
    title: `Concrete Walkways — ${COMPANY_NAME}`,
    description: "Front and side yard concrete walkways in Utah.",
    component: WalkwaysPage,
  },
  "/services/sidewalks": {
    title: `Concrete Sidewalks — ${COMPANY_NAME}`,
    description: "Sidewalk replacement and new pours for homes and light commercial in Utah.",
    component: SidewalksPage,
  },
  "/services/decorative-concrete": {
    title: `Decorative Concrete — ${COMPANY_NAME}`,
    description: "Stamped, stained, and accent decorative concrete in Utah.",
    component: DecorativeConcretePage,
  },
  "/services/small-footings-foundations": {
    title: `Small Footings & Foundations — ${COMPANY_NAME}`,
    description: "Footings for sheds, shops, and small structures — not full basement foundations.",
    component: SmallFootingsFoundationsPage,
  },
  "/areas/utah-county": {
    title: `Utah County Concrete — ${COMPANY_NAME}`,
    description: "Concrete flatwork and tearout in Utah County cities including Provo, Orem, and Lehi.",
    component: UtahCountyPage,
  },
  "/areas/salt-lake-county": {
    title: `Salt Lake County Concrete — ${COMPANY_NAME}`,
    description: "Concrete services in Salt Lake County including Sandy, Draper, and West Valley.",
    component: SaltLakeCountyPage,
  },
  "/areas/davis-county": {
    title: `Davis County Concrete — ${COMPANY_NAME}`,
    description: "Concrete flatwork in Davis County including Bountiful, Layton, and Farmington.",
    component: DavisCountyPage,
  },
};

const notFound: RouteConfig = {
  title: `Page Not Found — ${COMPANY_NAME}`,
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
