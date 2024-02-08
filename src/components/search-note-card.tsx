import { ChangeEvent, useState } from "react"

interface HandleSearchProps{
    handleSearch: (content: ChangeEvent<HTMLInputElement>) => void 
  }

export function SearchNoteCard({handleSearch}: HandleSearchProps){

    return (
        <form className="w-full">
            <input
                type="text"
                placeholder="Busque em suas notas..."
                className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
                onChange={handleSearch}
            />
        </form>
    )
}