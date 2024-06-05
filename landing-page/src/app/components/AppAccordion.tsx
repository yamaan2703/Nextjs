import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/accordion";

function AppAccordion() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion>
      <AccordionItem title="Wood-fired ovens" className='bg-gray-100 outline-none px-3'>
        <div className="px-5 py-1 flex justify-between items-center text-gray-700">
          <h3 className="text-lg font-semibold">Wood-fired ovens</h3>
          <span className="text-lg">▼</span>
        </div>
        <div className="px-5 py-3">
          {defaultContent}
        </div>
      </AccordionItem>

      <AccordionItem title="Flavors and aromas" className="bg-gray-100 outline-none px-3">
        <div className="px-5 py-1 flex justify-between items-center text-gray-700">
          <h3 className="text-lg font-semibold">Flavors and aromas</h3>
          <span className="text-lg">▼</span>
        </div>
        <div className="px-5 py-3">
          {defaultContent}
        </div>
      </AccordionItem>

      <AccordionItem title="Certificated Made in Italy" className="bg-gray-100 outline-none px-3">
        <div className="px-5 py-1 flex justify-between items-center text-gray-700">
          <h3 className="text-lg font-semibold">Certificated Made in Italy</h3>
          <span className="text-lg">▼</span>
        </div>
        <div className="px-5 py-3">
          {defaultContent}
        </div>
      </AccordionItem>

      <AccordionItem title="Sample Headine" className="bg-gray-100 outline-none px-3">
        <div className="px-5 py-1 flex justify-between items-center text-gray-700">
          <h3 className="text-lg font-semibold">Sample Headline</h3>
          <span className="text-lg">▼</span>
        </div>
        <div className="px-5 py-3">
          {defaultContent}
        </div>
      </AccordionItem>
    </Accordion>
  );
}

export default AppAccordion;
