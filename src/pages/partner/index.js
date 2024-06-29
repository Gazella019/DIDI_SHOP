import { useState, useEffect } from "react";
import Link from "next/link";
import { LayoutDidi } from "../../components/Layout";
import { FooterTwo } from "../../components/Footer";
import { urlFor } from "../../lib/client";
import { client } from '../../lib/client';


const ShopPartners = ({ partners }) => {

  return (
    <LayoutDidi>
      <div className="didi-partner-index-container">
      {partners && partners.map((partner) => {
        return (
          <Link href={`/partner/${partner.slug.current}`} key={partner.slug}>
            <a className="didi-partner-index-link">
              <div className="didi-partner-index-card">
                <div className="didi-partner-index-img">
                  <img src={urlFor(partner.thumbImage[0])} alt={partner.name} />
                </div>
                <p className="didi-partner-index-title">
                  {partner.name}
                </p>
              </div>
            </a>
          </Link>
        );
      })}
</div>


      <FooterTwo/>
    </LayoutDidi>
  );
};


export const getServerSideProps = async () => {
  const query = '*[_type == "partner"]';
  const partners = await client.fetch(query);
  console.log(partners)
  return {
    props: { partners }
  }
}

export default ShopPartners;