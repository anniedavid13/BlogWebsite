import React , {useContext}from 'react'
import Link from 'next/link'
const categories = [{name: 'Music', slug: 'music'}, {name: 'Movies', slug: 'movies'}, {name: 'Books', slug: 'books'}, {name: 'Tech', slug: 'tech'}]
const Header = () => {
    return (
        <div className="container mx-auto px-10 mb-8">
          <div className="border-b w-full inline-block border-white-300 py-8">
            <div className="md:float-left block">
              <Link href="/">
                <span className="cursor-pointer font-bold text-4xl text-white">A's corner</span>
              </Link>
            </div>
            <div className="hidden md:float-left md:contents">
              {categories.map((category, index) => (
                <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default Header