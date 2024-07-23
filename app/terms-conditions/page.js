"use client";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import Link from "next/link";

const list = [
  {
    keyword: "term-condition",
    title: "Terms & Condition",
    content:
      "These general terms and conditions apply to all of our contracts. We will agree on individual conditions for each project in writing, in addition to these general terms. Please supply the complete and exclusive terms and conditions for each contract we create with you. Please read these documents as they affect your rights and liabilities.",
  },
  {
    keyword: "interpretation",
    title: "Interpretation",
    content:
      'In these Terms, "the Company" refers to Relyte Space. "The Customer" is the party receiving products or services from the Company. "Contract" encompasses any quotation, signed contract, or estimate from the Company, any order accepted by the Company, and these Terms. "Customer Property" includes the Customer original artwork, samples, software files, or other materials provided to the Company. "Intellectual Property Rights" cover all patents, trade and service marks, registered and unregistered designs, copyrights, know-how, confidential information, trade or business names, applications for these, and any other similar protected rights. "Products and Services" refer to the items or services supplied under the Contract. "Third Party Creative Works" include photography, illustrations, or other creative services or products contracted from third parties. "Approved credit accounts" apply to companies with turnover exceeding £3 million, who can apply for and have been granted extended credit terms. No other statements (written or verbal) are considered part of the contract unless expressly agreed upon in writing. We do not accept responsibility for any representations made prior to entering into a contract unless specified in the terms of that contract. (For ease of reference, each contract made with you is referred to as "the contract" throughout these General Terms and Conditions.)',
  },
  {
    keyword: "service",
    title: "1. Services",
    content:
      "We will always ensure there are enough suitably qualified and experienced staff (including contract staff when needed) to provide the services. We will cover all wages, salaries, and other employment costs for these staff members.",
  },
  {
    keyword: "service",
    title: "2. Payments",
    content:
      "Unless we have specifically agreed otherwise in writing, our charges will be invoiced according to the times and services detailed in our proposal or quotation. Typically, we will invoice weekly in arrears for work completed during the previous week. We will invoice in advance for the cost of materials and other major expenses. If you request a suspension or delay of a job, we will send an up-to-date invoice for a reasonable proportion of the full contract price based on the value of the work already completed. Unless stated otherwise in our proposal, all invoices must be paid within 30 days of the invoice date. For projects divided into stages, we reserve the right to bill you upfront for each phase, with immediate payment required before work begins. If any payment is not made within 30 days of its due date, we reserve the right to suspend or cancel all our contracts with you immediately.",
  },
  {
    keyword: "employee",
    title: "3. Our Employees",
    content:
      "During the term of the contract or for a year or more following its termination, we both agree not to approach any other employee with an offer of employment unless: i) the other party has given prior written consent; ii) the offer of employment is the result of the employee's response to a public advertisement; or iii) the person in question has not participated in any of the discussions or negotiations that led to the contract or its operation. In the event that one of us violates this clause, the violating party will reimburse the other for an amount equivalent to the employee in question's six months' salary—a true pre-estimate of the other's damages.",
  },
  {
    keyword: "advertising",
    title: "4. Advertising Standards",
    content:
      "To make sure that all of the advertising we produce and distribute (in all media) is lawful, respectable, honest, and truthful, we adhere to the Advertising Standards Authority's regulations as well as the Indonesian Code of Advertising Practice and other codes of advertising standards. You undertake to provide us with objective, factual evidence supporting any claims you would like us to make about your goods or services in order to help us meet the requirements of these standards (or any regulatory obligations). You must notify us right away if you have any questions at all regarding the veracity of any statements we make about your product or service in copy. You are accountable for the accuracy of the copy you approve, and no copy should be false or deceptive in any manner. Refer to liability. Anything that, in our opinion, is offensive, unlawful, or defamatory will not be produced.",
  },
  {
    keyword: "copyright",
    title: "5. COPYRIGHT & INTELLECTUAL PROPERTY RIGHTS",
    content:
      "In the event that the companys presentation is unsuccessful, or if the company produces any other material speculatively and it is not used, whether or not it is in competition with another agency, the company shall retain the copyright in any material contained in any presentation made in competition with any other agency. Subject to the other terms stated herein, the Company shall always retain title to and ownership of all materials, intellectual property, and moral rights in any work it undertakes. This ownership will continue until all invoices for services rendered have been fully paid by the Customer. Third Party Creative Works are either the Third Party Suppliers or the Companys intellectual property, as agreed upon. After paying the agreed-upon payments, the Customer will have the right to use such works for the reasons specified in the Contract; nevertheless, this will not transfer any intellectual property in the Third Party Creative Works. Any further use or transfer of intellectual property in Third Party Creative works beyond the scope of the Contract may be permitted by agreement with the Company and at a price agreed upon between the parties.",
  },
  {
    keyword: "software",
    title: "5.1. Software Title",
    content:
      'It is customary for suppliers of computer software items, or copies of them, to hold onto the intellectual property contained in those products ("proprietary software"). The customers right or interest in any proprietary software will be limited to the use or enjoyment of that software as permitted or granted by the company or the owner of the intellectual property contained therein. This use will be subject to the terms and conditions set forth by the supplier, a copy of which can be obtained from the company upon request. When using Third Party Creative works other than those allowed by the Company, the Customer assumes full responsibility for any copyright infringement claims made by a third party. The Customer also agrees to indemnify the Company for any losses or damages (including legal fees) incurred as a result of any such claims. When a customer submits information, sound, or pictures ("works") that the company will use to fulfill an order or duplicate, the customer guarantees that it is the rightful owner of all copyrights pertaining to those materials. Each party shall hold the other harmless from any and all costs, demands, demands, expenses, and liabilities resulting from or related to any claim that the Customer"s ordinary use or possession of the Products or Third Party Products (whether used singly or in combination) violates any third party"s intellectual property rights.',
  },
  {
    keyword: "software-license",
    title: "5.2. Software License",
    content:
      'With the following exceptions: When the Company supplies software or other computer-based materials, it will deliver executable code that the Customer will have full rights to use in accordance with these Terms. The Customer will be entitled to the non-exclusive use of the Company"s software as provided under the Contract. The Company is still the owner of the intellectual property embedded in the software. A perpetual, non-exclusive license to use and maintain the application is hereby provided to the customer. The software can only be used for the purposes for which it was intended. For the purpose of broad reproduction, sales, or transmission, no license is allowed. Without the express written consent of the Company, the Customer is not permitted to alter, adapt, rent, sell, or produce derivative works based in whole or in part on the Software. Any licenses that come with the company"s software must be followed by the customer. The Customer"s usage of Third Party Software under the Contract is restricted to what is permitted under the terms of the software"s licenses.',
  },
  {
    keyword: "important-info",
    title: "5.3. Important Information",
    content:
      "At all times during and after our business relationship, ownership of all materials, intellectual property, and moral rights related to any work undertaken by the Company will remain with the Company until the Customer has paid all related invoices in full. The Company is entitled to a general lien on all Customer property in its possession until all outstanding payments due to the Company are settled. The Company reserves the right to withdraw any services (including web services) and withhold any customer data or materials until all outstanding payments are collected. We will retain the copyright and other intellectual property rights in all work we do for you, including software, brand names, logos, etc. If we obtain material from a third party for you, all rights remain with them. Should you wish to use any of these rights after the contract is completed, and provided all your obligations under the contract are fulfilled, we can arrange to license such rights to you. Arrangements for any original illustrations, photos, etc., commissioned on your behalf typically cover one use only for the specific campaign. We will accept responsibility for any third-party claims against you arising from material we create or supply, provided that: (i) you inform us immediately of any likely infringement; (ii) you allow us to handle any legal repercussions solely; (iii) you follow our instructions and provide assistance as needed; and (iv) you have not acted negligently or recklessly in using the material. We accept no liability for material you supply or specify; it is entirely your responsibility to ensure it is free of copyright or other intellectual property right restrictions. If we are held responsible for any copyright or other intellectual property right infringement, we may at our expense either: (i) pay for the right to continue using the material; or (ii) make necessary alterations or substitutions to comply with copyright or other intellectual property requirements. Upon delivering a website, Relyte will issue a 60-day warranty to cover all software or design faults within the agreed scope of work.",
  },
  {
    keyword: "other-right",
    title: "6. Other Rights",
    content:
      "All of the materials we create or use to carry out the contract on your behalf always belong to us. Because of this, we are free to use, erase, or dispose of them as we see fit, barring your request or our need to make special written arrangements with you.",
  },

  {
    keyword: "price",
    title: "7. Price",
    content:
      "In certain cases, the price that you are charged can be more than what was advertised. These are the following: i) Should third parties increase their prices prior to delivery, thereby increasing our costs; ii) Should there be any delays on your part resulting in increased costs; iii) Should you make any modifications to the specifications that served as the basis for our quotation, thereby increasing our costs; iv) Should you require color proofs (unless we specifically include this in our quotation); v) Should we handle or store any materials that you supply; vi) Should there be any changes to the law that result in additional costs for work for which we have already quoted. Delivery, which will be charged at the appropriate rate, and VAT (or any other sales-related tax) are not included in our given costs.",
  },
  {
    keyword: "confidentiality",
    title: "8. Confidentiality",
    content:
      'Our business relationship is grounded in mutual confidentiality. We both agree to keep all information about each other"s business affairs strictly confidential. Any information about our respective business affairs or any associated company will be considered confidential unless: (i) it becomes public knowledge through no fault of either party or breach of our contract; (ii) it was already in the recipient party"s possession and not received under a duty of confidence when initially shared; or (iii) it is obtained from a third party who has no duty of confidence to the other party, provided the recipient party has no reason to believe the third party unlawfully acquired the information. Both parties will keep confidential all information shared with them or made available to them, or which comes into their possession as a direct or indirect result of this contract. Neither party shall use or disclose such confidential information to any third party, except to those directors, officers, employees, and agents who need the information to fulfill the contract and only to the necessary extent. Each party is responsible for ensuring compliance with the applicable provisions of the Data Protection Act 1984. We both agree to exercise due care and take all necessary steps to ensure our employees, agents, and subcontractors adhere to this confidentiality obligation.',
  },
  {
    keyword: "performance",
    title: "9. Performance",
    content:
      "Unless a signed written guarantee from one of our Board Directors indicates otherwise, all times and dates specified for the performance of services are estimates.",
  },
  // {
  //   keyword: "liability",
  //   title: "10. Liability",
  //   content:''},
  {
    keyword: "force-majeure",
    title: "10. Force Majeure",
    content:
      "If an unforeseeable event outside either party's reasonable control results in a failure to fulfill any of the responsibilities outlined in the contract, neither party is accountable to the other for that failure. Unexpected events can include things like war, riots, explosions, strange weather, acts of God, fire, flood, strikes, lock-outs, government actions or regulations, supplier delays, accidents, shortages of labor, materials, or manufacturing facilities, to name a few. In the event of Force Majeure, the party asserting that they are affected by the conditions must promptly notify and counsel the other party, and the parties must immediately convene to decide on the best course of action given the circumstances.",
  },
  {
    keyword: "termination",
    title: "11. Termination",
    content:
      "Both parties may amend this agreement at their mutual discretion, and either may end it in writing with thirty days' notice. This thirty-day notice period is only applicable for the first thirty days following the parties' signature. After that, the only way to end it is to give 90 days' notice. In the event that this agreement is terminated, we will return to you all deliverables that we made to you in accordance with its terms and conditions, including with any information you gave us. In the event of such a termination, all outstanding invoices were payable. All charges that are unpaid as of the termination date will be included in an invoice from us. This invoice will be marked as contract closure, and payment for it is due within seven business days of our receipt. Upon the expiration of the agreement, each of us will, upon request from the other, return or delete all copies and other documents that are a part of any program as well as any other documents that the other has supplied throughout the agreement. After receiving a written request from the other, each of us must complete this task within seven days and certify in writing that it has been completed. Any rights that either party may have accrued on or before the contract's termination will remain unaffected.",
  },
  {
    keyword: "disputes",
    title: "12. Disputes & Proper Law",
    content:
      "Any disagreement that may develop between the parties over the terms of the contract will be settled as follows: i) if the disagreement is technical in nature and concerns computing, data processing, or any other similar or related matter, it will be referred for a final resolution to an expert chosen jointly by the parties, or in the event that no expert is nominated within 14 days, it will be chosen at the request of either party by the Computing Services Association's Chairman for the time being. In the event that there is no obvious mistake, the nominee's decision will be considered final and binding on both parties. He will be considered acting as an expert rather than an arbitrator. Unless such expert determines that the behavior of either party is such that one party should bear a different proportion of such fees, the parties shall bear equal shares of his fees for so acting. ii) If the matter is resolved in any other manner, the parties agree to submit to the exclusive jurisdiction of the High Court of Justice in Indonesia, which will decide the dispute.",
  },
  {
    keyword: "notice",
    title: "13. Notice",
    content:
      "Any notices that one of us is required to give under the terms of the contract must be delivered in person, by fax, or by first class mail to the other party's address listed in the contract (or to any alternative address that may occasionally be communicated in writing by one party to the other). If a notice is delivered in person, it is considered served at the moment of delivery; if it is transmitted by fax, it is considered served 12 hours after transmission; and if it is posted, it is considered served 48 hours after posting.",
  },
  {
    keyword: "law",
    title: "14. Law",
    content:
      "The laws of Indonesia shall apply to the interpretation and enforcement of this contract.",
  },
  {
    keyword: "assignment",
    title: "15. Assignment",
    content:
      "Without the other's prior, in writing consent, neither of us may assign or transfer any of our rights or responsibilities under the terms of the agreement. With the exception of what is stated here, neither of us may represent ourselves as the other's agent or legal representative, nor claim any authority or right granted by the agreement to take on any express or implied obligation on the other party's behalf or to contractually bind the other in any manner.",
  },
  {
    keyword: "waiver",
    title: "16. Waiver",
    content:
      "The party with the right to enforce a term or condition will not be prejudiced in any way by any delay, carelessness, or forbearance in doing so; nor will it be interpreted as a waiver of such rights.",
  },
  {
    keyword: "privacy-policy",
    title: "17. Privacy Policy",
    content:
      'We are dedicated to protecting the privacy of this website"s users. The following details our privacy policy and how we will handle your personal data. Nothing in this privacy statement will restrict your legal rights regarding your personal information. By using relyte.space (this "site" or "website") to submit personal information to us, you agree that we may process that information in line with this policy and our Terms of Use. The definitions used in our Terms of Use will apply to any terms used in this Privacy Policy. Relyte, whose business address is Jl. Al-Ikhlas No. 10, Makassar, 90245, shall be the entity that holds your information. Relyte is the data controller for the purposes of the Data Protection Act 1998.',
  },
  {
    keyword: "info-we-collect",
    title: "17.1. What Information Do We Collect",
    content:
      'We are dedicated to protecting the privacy of this website"s users. The following details our privacy policy and how we will handle your personal data. Nothing in this privacy statement will restrict your legal rights regarding your personal information. By using www.discoveroutpost.com (this "site" or "website") to submit personal information to us, you agree that we may process that information in line with this policy and our Terms of Use. The definitions used in our Terms of Use will apply to any terms used in this Privacy Policy. Relyte, whose business address is Jl. Al-Ikhlas Blok HK No. 10, Makassar, 90245, shall be the entity that holds your information. Relyte is the data controller for the purposes of the Data Protection Act 1998 (the "Act").',
  },
  {
    keyword: "what-we-do-info",
    title: "17.2. What Do We Do With Your Information",
    content:
      "Applications for Your Data. In order to provide you with services, such as our email newsletter, we may use your information for a variety of reasons, such as: (a) in connection with that provision; (b) to administer and maintain our records; (c) to improve this site so that content from this site is presented in the most efficient way for you and your computer; (d) to assist us in maintaining the safety and security of this site; (f) to verify your identity and to answer any questions you may have; and (g) to fulfill any contractual obligations we may have with you.",
  },
  {
    keyword: "email-list",
    title: "17.3. Email List",
    content:
      "We will use your data to provide you with information about our services which may be of interest to you. By providing us with your email address when you register with this site you give us consent to contact you by email. You may unsubscribe from our email list using the link included in each email or by emailing us at hello@relyte.space",
  },
  {
    keyword: "marketing",
    title: "17.4. Marketing",
    content: "We may use your data to contact you for market research purposes",
  },
  {
    keyword: "tech-updates",
    title: "17.5. Technical Updates",
    content:
      "We reserve the right to periodically send emails to registered users of this site informing them of updates and changes to our services as well as any technical, administrative, or legal notices that we feel are necessary for this site.",
  },
  {
    keyword: "terms-use",
    title: "17.6. Terms of Use",
    content:
      "Your provided personal data may be used for an indefinite amount of time, but it will never be used for longer than is required.",
  },
  {
    keyword: "info-date-secure",
    title: "17.7. Keeping Data Secure and Up to Date",
    content:
      "Should you need to modify any of the data you have given us—for instance, your email address or other contact information—or if you would like to unsubscribe or de-register—please send us an email at hello@relyte.space",
  },
  {
    keyword: "data-duration",
    title: "17.8. How Long Do We Keep Your Data?",
    content:
      "We don't retain personal information longer than is necessary for the intended use.",
  },
  {
    keyword: "store-your-data",
    title: "17.9. Where We Store Your Data",
    content:
      "We store all of the information you give us on our safe servers. A suitable level of security has been implemented, taking into account the type of data involved and the potential consequences of a security breach. Regretfully, information transmitted via the Internet is not entirely secure. Despite our best efforts to safeguard your personal information, we are unable to ensure the security of any information you communicate to this website; you transmit at your own risk. We will attempt to prevent unauthorized access using stringent protocols and security features after we have received your information. We promise to take all reasonable measures to protect your personal information.",
  },
  {
    keyword: "your-consent",
    title: "17.10. Your Consent",
    content:
      "You agree that the uses of your information described in this policy are permitted by submitting it. In order to keep you informed of any changes to our privacy statement, we will post such updates on this page and maybe on other website pages. You can also periodically visit this page to examine any updates we make to our privacy statement.",
  },
  {
    keyword: "contact-details",
    title: "17.11. Contact Details",
    content:
      "Please send an email to hello@relyte.space with any questions or comments you may have about our privacy policy.",
  },
];

function Page() {
  gsap.registerPlugin(ScrollToPlugin);
  return (
    <main className="">
      <div className="max-screen mx-auto grid grid-cols-1 gap-10 px-4 py-32 sm:grid-cols-3 sm:px-8 xl:px-0">
        <div className="sm:sticky sm:top-28 sm:h-[30rem] sm:overflow-y-auto">
          <h1 className="mb-2 font-semibold underline underline-offset-4">
            Table of Content
          </h1>
          <aside className="flex flex-col gap-[0.2rem] uppercase">
            {list.map((item, i) => {
              return (
                <a
                  key={i}
                  href={`#${item.keyword}`}
                  onClick={(e) => {
                    e.preventDefault();
                    gsap.to(window, {
                      duration: 1,
                      scrollTo: { y: `#${item.keyword}`, offsetY: 150 },
                      ease: "power2",
                    });
                  }}
                  className="text-xs font-medium hover:text-primary"
                >
                  {item.title}
                </a>
              );
            })}
          </aside>
        </div>

        <div className="col-span-2 flex flex-col gap-12">
          {list.map((item) => {
            return (
              <article
                key={item.keyword}
                className="flex flex-col gap-2"
                id={`${item.keyword}`}
              >
                <h1 className="font-h6 uppercase">{item.title}</h1>
                <p>{item.content}</p>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Page;
