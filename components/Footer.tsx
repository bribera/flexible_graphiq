import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ColumnProps = {
  title: string;
  links: Array<string>
}

const Footer = () => {

  const FooterColumn = ({title, links}: ColumnProps) => (
    <div className="footer_column"> 
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map((link) => (
          <Link href="/" key={link}>
              {link}
          </Link>
        ))}
      </ul>
    </div>
  )

  return (
    <footer className='flexStart footer'>
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
                  src="/logo-purple.svg"
                  alt='Flexible'
                  width={115}
                  height={38}
          />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Lorem ipsum laudantium ducimus, 
            corporis eos sapiente. Obcaecati, 
            temporibus?
          </p>
        </div>
        <div className="flex flex-wrap gap-12 ">
          <FooterColumn 
          title={footerLinks[0].title}
          links={footerLinks[0].links}
          />

          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn 
            links={footerLinks[1].links}
            title={footerLinks[1].title}
            />
            <FooterColumn 
            title={footerLinks[2].title}
            links={footerLinks[2].links}
            />
          </div>
          <FooterColumn 
          title={footerLinks[3].title}
          links={footerLinks[3].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn 
            links={footerLinks[4].links}
            title={footerLinks[4].title}
            />
            <FooterColumn 
            title={footerLinks[5].title}
            links={footerLinks[5].links}
            />
          </div>
          <FooterColumn 
          title={footerLinks[6].title}
          links={footerLinks[6].links}
          />
        </div>
      </div>
      <div className="flex-Between footer_copyright">
          <p className="">@ 2023 Flexible. All right reserved</p>
          <p className="text-gray">
            <span className='text-black font-semibold'>10,214</span>
            projects submitted
          </p>
      </div>
    </footer>
  )
}

export default Footer
