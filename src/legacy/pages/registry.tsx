import type { ComponentType, ReactNode } from "react";
import type { Metadata } from "next";
import About, {
  metadata as aboutMetadata,
  pageProps as aboutProps,
} from "./public/about";
import Academics, {
  metadata as academicsMetadata,
  pageProps as academicsProps,
} from "./public/academics";
import Admissions, {
  metadata as admissionsMetadata,
  pageProps as admissionsProps,
} from "./public/admissions";
import Contact, {
  metadata as contactMetadata,
  pageProps as contactProps,
} from "./public/contact";
import Facilities, {
  metadata as facilitiesMetadata,
  pageProps as facilitiesProps,
} from "./public/facilities";
import Fees, {
  metadata as feesMetadata,
  pageProps as feesProps,
} from "./public/fees";
import Gallery, {
  metadata as galleryMetadata,
  pageProps as galleryProps,
} from "./public/gallery";
import History, {
  metadata as historyMetadata,
  pageProps as historyProps,
} from "./public/history";
import Home, {
  metadata as homeMetadata,
  pageProps as homeProps,
} from "./public/index";
import News, {
  metadata as newsMetadata,
  pageProps as newsProps,
} from "./public/news";
import PrimarySchool, {
  metadata as primarySchoolMetadata,
  pageProps as primarySchoolProps,
} from "./public/primary-school";
import Schools, {
  metadata as schoolsMetadata,
  pageProps as schoolsProps,
} from "./public/schools";
import SecondarySchool, {
  metadata as secondarySchoolMetadata,
  pageProps as secondarySchoolProps,
} from "./public/secondary-school";
import AdminActivities, {
  metadata as adminActivitiesMetadata,
  pageProps as adminActivitiesProps,
} from "./admin/activities";
import AdminAdmissions, {
  metadata as adminAdmissionsMetadata,
  pageProps as adminAdmissionsProps,
} from "./admin/admissions";
import AdminDashboard, {
  metadata as adminDashboardMetadata,
  pageProps as adminDashboardProps,
} from "./admin/dashboard";
import AdminLogin, {
  metadata as adminLoginMetadata,
  pageProps as adminLoginProps,
} from "./admin/login";
import AdminMessages, {
  metadata as adminMessagesMetadata,
  pageProps as adminMessagesProps,
} from "./admin/messages";
import AdminStudents, {
  metadata as adminStudentsMetadata,
  pageProps as adminStudentsProps,
} from "./admin/students";

type PageProps = {
  bodyClass: string;
  school?: string;
  adminPage?: string;
  scripts: readonly string[];
};

export type PageDefinition = {
  Component: ComponentType;
  metadata: Metadata;
  pageProps: PageProps;
  isAdmin: boolean;
};

const publicPages: Record<string, PageDefinition> = {
  about: { Component: About, metadata: aboutMetadata, pageProps: aboutProps, isAdmin: false },
  academics: { Component: Academics, metadata: academicsMetadata, pageProps: academicsProps, isAdmin: false },
  admissions: { Component: Admissions, metadata: admissionsMetadata, pageProps: admissionsProps, isAdmin: false },
  contact: { Component: Contact, metadata: contactMetadata, pageProps: contactProps, isAdmin: false },
  facilities: { Component: Facilities, metadata: facilitiesMetadata, pageProps: facilitiesProps, isAdmin: false },
  fees: { Component: Fees, metadata: feesMetadata, pageProps: feesProps, isAdmin: false },
  gallery: { Component: Gallery, metadata: galleryMetadata, pageProps: galleryProps, isAdmin: false },
  history: { Component: History, metadata: historyMetadata, pageProps: historyProps, isAdmin: false },
  news: { Component: News, metadata: newsMetadata, pageProps: newsProps, isAdmin: false },
  "primary-school": {
    Component: PrimarySchool,
    metadata: primarySchoolMetadata,
    pageProps: primarySchoolProps,
    isAdmin: false,
  },
  schools: { Component: Schools, metadata: schoolsMetadata, pageProps: schoolsProps, isAdmin: false },
  "secondary-school": {
    Component: SecondarySchool,
    metadata: secondarySchoolMetadata,
    pageProps: secondarySchoolProps,
    isAdmin: false,
  },
};

const adminPages: Record<string, PageDefinition> = {
  activities: {
    Component: AdminActivities,
    metadata: adminActivitiesMetadata,
    pageProps: adminActivitiesProps,
    isAdmin: true,
  },
  admissions: {
    Component: AdminAdmissions,
    metadata: adminAdmissionsMetadata,
    pageProps: adminAdmissionsProps,
    isAdmin: true,
  },
  dashboard: {
    Component: AdminDashboard,
    metadata: adminDashboardMetadata,
    pageProps: adminDashboardProps,
    isAdmin: true,
  },
  login: {
    Component: AdminLogin,
    metadata: adminLoginMetadata,
    pageProps: adminLoginProps,
    isAdmin: true,
  },
  messages: {
    Component: AdminMessages,
    metadata: adminMessagesMetadata,
    pageProps: adminMessagesProps,
    isAdmin: true,
  },
  students: {
    Component: AdminStudents,
    metadata: adminStudentsMetadata,
    pageProps: adminStudentsProps,
    isAdmin: true,
  },
};

export function getPageDefinition(slug: string[] = []): PageDefinition | null {
  if (slug.length === 0) return {
    Component: Home,
    metadata: homeMetadata,
    pageProps: homeProps,
    isAdmin: false,
  };
  if (slug.length === 1) return publicPages[slug[0]] ?? null;
  if (slug.length === 2 && slug[0] === "admin") {
    return adminPages[slug[1]] ?? null;
  }
  return null;
}

export function RenderPage({ definition }: { definition: PageDefinition }): ReactNode {
  const PageComponent = definition.Component;
  return <PageComponent />;
}
