import React, {useState, useEffect} from 'react'
import Api from '../Api'
import {useHistory , useParams} from 'react-router-dom'

const SectionForm = () => {
    const history = useHistory()
    const {id} = useParams();
    const [section, setSection] = useState({
        name: '',
        slug: '',
        position: 0
    })

    useEffect(() => {
        if (id) {
            Api.sections.get(id).then(response => setSection(response.data))
        }
    },[id])
    
    const onChange = (event) => {
        const newSection = {...section};
        newSection[event.target.name] = event.target.value;
        setSection(newSection)
    }

     const onSubmit = async (event) => {
        event.preventDefault();
        try {
            if (id) {
                await Api.sections.update(id, section);
            } else {
                await Api.sections.create(section)
            }
            history.push('/sections')
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <main>
            <h1>Section Forms</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label>Name</label>
                    <input className="form-control" type="text" name="name" value={section.name} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label>Slug</label>
                    <input className="form-control" type="text" name="slug" value={section.slug} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label>Position</label>
                    <input className="form-control" type="text" name="position" value={section.position} onChange={onChange}/>
                </div>
                <button className="btn, btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(section)}</p>
        </main>
    )
}

export default SectionForm;