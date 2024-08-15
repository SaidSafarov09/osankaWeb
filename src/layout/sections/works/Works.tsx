import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import work1 from "../../../assets/images/works/work-1.jpg";
import work2 from "../../../assets/images/works/work-2.jpg";
import work3 from "../../../assets/images/works/work-3.jpg";
import work4 from "../../../assets/images/works/work-4.jpg";
import work5 from "../../../assets/images/works/work-5.jpg";
import work6 from "../../../assets/images/works/work-6.jpg";
import work7 from "../../../assets/images/works/work-7.jpg";
import work8 from "../../../assets/images/works/work-8.jpg";
import work9 from "../../../assets/images/works/work-9.jpg";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { Tabs, TabsStatus, TabsType } from "../../../components/tabs/Tabs";
import { S } from "./Works_Styles";

type WorksDataType = { id: string; src: string; type: TabsStatus };

const DataTabs: TabsType[] = [
  { id: "tab1", text: "Показать все", status: "all" },
  { id: "tab2", text: "Парикмахерские услуги", status: "hairdressing" },
  { id: "tab3", text: "Маникюр", status: "manicure" },
  { id: "tab4", text: "Педикюр", status: "pedicure" },
];

const worksData: WorksDataType[] = [
  { id: "works1", src: work1, type: "hairdressing" },
  { id: "works2", src: work2, type: "pedicure" },
  { id: "works3", src: work3, type: "manicure" },
  { id: "works4", src: work4, type: "hairdressing" },
  { id: "works5", src: work5, type: "pedicure" },
  { id: "works6", src: work6, type: "hairdressing" },
  { id: "works7", src: work7, type: "manicure" },
  { id: "works8", src: work8, type: "manicure" },
  { id: "works9", src: work9, type: "pedicure" },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filteredWorks = worksData;

  if (currentFilterStatus === "hairdressing") {
    filteredWorks = worksData.filter((work) => work.type === "hairdressing");
  }
  if (currentFilterStatus === "manicure") {
    filteredWorks = worksData.filter((work) => work.type === "manicure");
  }
  if (currentFilterStatus === "pedicure") {
    filteredWorks = worksData.filter((work) => work.type === "pedicure");
  }

  function changeFilterStatus(status: TabsStatus) {
    setCurrentFilterStatus(status);
  }

  return (
    <S.Works>
      <Container>
        <SectionTitle>Наши курсы</SectionTitle>
        {/* <Tabs
          tabs={DataTabs}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        /> */}
        <S.WorksWrapper>
          <AnimatePresence>
            {filteredWorks.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <S.Image src={item.src} key={item.id} />
              </motion.div>
            ))}
          </AnimatePresence>
        </S.WorksWrapper>
      </Container>
    </S.Works>
  );
};
