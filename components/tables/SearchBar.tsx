"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
//NOT WORKING LOLLLLLL
const SearchBar = () => {

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const {replace } = useRouter()

  const handleSearch = (e: any) => {
    const params = new URLSearchParams(searchParams)

    if (e.target.value) {
      e.target.value.length > 3 && params.set("query", e.target.value)
    } else {
      params.delete("query")
    }

    replace(`${pathname}?${params}`)
  }
   
  return (
    <div>
      <label htmlFor="table-search" className="sr-only">Search</label>
        <div>
          <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" onChange={handleSearch} />
      </div>
    </div>
  )
}

export default SearchBar