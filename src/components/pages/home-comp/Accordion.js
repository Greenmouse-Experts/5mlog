import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
 
function Icon({ id, open }) {
  return (
    <div>
        { id === open ?  <FiMinusCircle/>  : <FiPlusCircle /> }
    </div>
  );
}
 
export default function MyAccordion() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)} className="lg:px-6 px-2 border shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 pr-2 lg:pr-6 text-primary">Q.</span>Who is 5M Logistics ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600">5M Logistics is a subsidiary of 5M global services Located in the
            United States and Nigeria . 5M, is a fully licensed international freight forwarding and
            courier operating within the United States , and out of the United state of America. Within
            Nigeria and out of Nigeria .
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)} className="lg:px-6 px-2 border lg:mt-6 mt-3 shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 lg:pr-6 pr-2 text-primary">Q.</span>Are there selected countries for this services ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600">No, we cover all countries in the world.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)} className="lg:px-6 px-2 border lg:mt-6 mt-3 shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 lg:pr-6 text-primary">Q.</span>Do you ship all kinds of items ? </p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600">Yes, excluding items prohibited by law enforcement agencies.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)} className="lg:px-6 px-2 border lg:mt-6 mt-3 shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 pr-2 lg:pr-6 text-primary">Q.</span>Can I buy goods from different countries and ship to our Warehouse in United States?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600">Yes, you can.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)} className="lg:px-6 px-2 border lg:mt-6 mt-3 shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 pr-2 lg:pr-6 text-primary">Q.</span>Can I store Items in your warehouse ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600">Yes, we provide 10 days free storage for our registered customers.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(6)} className="lg:px-6 px-2 border lg:mt-6 mt-3 shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 pr-2 lg:pr-6 text-primary">Q.</span>What is the delivery timeline ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600"> 2-3 working days depends on the zone and region and shipping from United States
          to Nigeria 5-7 business day ,and same day deliveries are available in selected cities Lagos and
          Abuja.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(7)} className="lg:px-6 px-2 border lg:mt-6 mt-3 shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 pr-2 lg:pr-6 text-primary">Q.</span>Can I shop and ship from international websites (Walmart , Best Buy, Amazon, ) into Nigeria ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600">Yes, you can.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(8)} className="lg:px-6 px-2 border lg:mt-6 mt-3 shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 pr-2 lg:pr-6 text-primary">Q.</span>Can I ship if I'm not in Houston Texas ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600">Yes, all you need to do is to send your shipment to any of our warehouses in Houston
          Texas.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(9)} className="lg:px-6 px-2 border lg:mt-6 mt-3 shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 pr-2 lg:pr-6 text-primary">Q.</span>How do I package my shipment ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600">We have the right team and tools to professionally package your shipment to ensure your goods
          are delivered safely to its destination
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 10} icon={<Icon id={10} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(10)} className="lg:px-6 px-2 border lg:mt-6 mt-3 shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 pr-2 lg:pr-6 text-primary">Q.</span>How do I know if my items have been received at your warehouse?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600">As your items come in the warehouse, you will be alerted via your email or Text
          messages and you will have the option to verify if all the items being shipped are correct.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 11} icon={<Icon id={11} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(11)} className="lg:px-6 px-2 border lg:mt-6 mt-3 shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 pr-2 lg:pr-6 text-primary">Q.</span>Can I store Items in your warehouse ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600">Our office in Houston Texas , USA is open for business between 9am & 6pm Monday to
            Friday while 10am -5pm on Saturday. while our Nigeria office opens 8am to 6pm Monday to
            Saturday .</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 12} icon={<Icon id={12} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(12)} className="lg:px-6 px-2 border lg:mt-6 mt-3 shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 pr-2 lg:pr-6 text-primary">Q.</span>How do I pay for shipment ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600">By using various payment methods , These include United States credit and debit cards , Zelle,
          cash app, paypal and online transfer . You can also pay directly to any of our partner banks in
          Nigeria.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 13} icon={<Icon id={13} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(13)} className="lg:px-6 px-2 border lg:mt-6 mt-3 shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 pr-2 lg:pr-6 text-primary">Q.</span>Are there any charges Associated with creating an account ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600">No, we offer a free personal account to all our esteemed customers.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 14} icon={<Icon id={14} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(14)} className="lg:px-6 px-2 border lg:mt-6 mt-3 shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 pr-2 lg:pr-6 text-primary">Q.</span>How do I track my shipment ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600">Tracking details will be sent to you immediately shipment are drop off .</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 15} icon={<Icon id={15} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(15)} className="lg:px-6 px-2 border lg:mt-6 mt-3 shadow lg:py-5">
            <p className="fs-700 text-black"><span className="fw-600 pr-2 lg:pr-6 text-primary">Q.</span>Where are your different warehouses located ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:px-10 fs-600">We have warehouses in Houston Texas United state , and we also have 7 locations in Nigeria .
            Lagos , Abuja , ogbomosho , kaduna Kano, Ado ekiti, and ikorodu.</p>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}