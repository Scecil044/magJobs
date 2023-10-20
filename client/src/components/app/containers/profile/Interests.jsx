import { useState } from "react";
import { TETabs, TETabsContent, TETabsItem, TETabsPane } from "tw-elements-react";
import TopVoices from "../../../tabs/TopVoices";
import CompaniesTab from "../../../tabs/CompaniesTab";
import SchoolsTab from "../../../tabs/SchoolsTab";
import GroupsTab from "../../../tabs/GroupsTab";
import NewsLettersTab from "../../../tabs/NewsLettersTab";

export default function Interests() {
  const [colorsActive, setColorsActive] = useState({
    tab1: "tab1",
    tab2: "tab1",
    tab3: "tab1",
    tab4: "tab1",
    tab5: "tab1",
    tab6: "tab1",
    tab7: "tab1",
    tab8: "tab1"
  });
  const handleColorsClick = value => {
    if (value === colorsActive) {
      return;
    }
    setColorsActive({ ...colorsActive, ...value });
  };
  return (
    <div className="bg-white shadow-lg p-5 border border-gray-400">
      <div className="flex flex-col">
        <h1 className="card-title font-semibold text-[18px]">Interests</h1>
        {/* Tabs */}
        <div>
          <TETabs>
            <TETabsItem
              onClick={() => handleColorsClick({ ...colorsActive, tab3: "tab1" })}
              active={colorsActive.tab3 === "tab1"}
              color="success"
            >
              Top voices
            </TETabsItem>
            <TETabsItem
              onClick={() => handleColorsClick({ ...colorsActive, tab3: "tab2" })}
              active={colorsActive.tab3 === "tab2"}
              color="success"
            >
              Companies
            </TETabsItem>
            <TETabsItem
              onClick={() => handleColorsClick({ ...colorsActive, tab3: "tab3" })}
              active={colorsActive.tab3 === "tab3"}
              color="success"
            >
              Groups
            </TETabsItem>
            <TETabsItem
              onClick={() => handleColorsClick({ ...colorsActive, tab3: "tab4" })}
              active={colorsActive.tab3 === "tab4"}
              color="success"
            >
              Newsletters
            </TETabsItem>
            <TETabsItem
              onClick={() => handleColorsClick({ ...colorsActive, tab3: "tab5" })}
              active={colorsActive.tab3 === "tab5"}
              color="success"
            >
              Schools
            </TETabsItem>
          </TETabs>
          <TETabsContent>
            <TETabsPane show={colorsActive.tab3 === "tab1"}>
              <TopVoices />
            </TETabsPane>
            <TETabsPane show={colorsActive.tab3 === "tab2"}>
              <CompaniesTab />
            </TETabsPane>
            <TETabsPane show={colorsActive.tab3 === "tab3"}>
              <GroupsTab />
            </TETabsPane>
            <TETabsPane show={colorsActive.tab3 === "tab4"}>
              <NewsLettersTab />
            </TETabsPane>
            <TETabsPane show={colorsActive.tab3 === "tab5"}>
              <SchoolsTab />
            </TETabsPane>
          </TETabsContent>
        </div>
        {/* end tabs */}
      </div>
    </div>
  );
}
