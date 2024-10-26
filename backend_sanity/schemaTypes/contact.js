import { defineField, defineType } from "sanity";

export const contactType= defineType ({
    name:'contact',
    title:'Contact',
    type:'document',
    fields:[
        defineField({
            name:'name',
            title:'Name',
            type:'string'
        }),
        defineField({
            name:'email',
            title:'Email',
            type:'string'
        }),
        defineField({
            name:'message',
            title:'Message',
            type:'text'
        })
    ]
})