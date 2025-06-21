/* eslint-disable @typescript-eslint/no-explicit-any */
import MotionWrapper from "@/components/animation.component";
import EconomicTab from "./tabs/economic.tab";
import EnviromentTab from "./tabs/enviroment";
import EqualityTab from "./tabs/equality.tab";
import HealthTab from "./tabs/health.tab";
import InfastructureTab from "./tabs/infastructure";
import SocialTab from "./tabs/social.tab";

export default function OverviewSection({ city }: any) {
  return (
    <MotionWrapper className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <EconomicTab city={city} />
      <SocialTab city={city} />
      <HealthTab city={city} />
      <EnviromentTab city={city} />
      <InfastructureTab city={city} />
      <EqualityTab city={city} />
    </MotionWrapper>
  );
}
