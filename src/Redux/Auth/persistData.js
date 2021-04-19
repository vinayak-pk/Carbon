export const savelData=(key,data)=>{
    try {
        localStorage.setItem(key,JSON.stringify(data))
    } catch (error) {
        return
    }
}

export const getlData = (key)=>{
    let data = localStorage.getItem(key)
    return JSON.parse(data);
}