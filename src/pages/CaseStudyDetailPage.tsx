import { useParams } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import CaseStudyLayout from "../components/CaseStudyLayout";
import NotFoundPage from "./NotFoundPage";

export default function CaseStudyDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const study = caseStudies.find((cs) => cs.slug === slug);

    if (!study) {
        return <NotFoundPage />;
    }

    return <CaseStudyLayout data={study} />;
}
