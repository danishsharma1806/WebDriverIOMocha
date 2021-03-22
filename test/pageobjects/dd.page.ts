class dropdown
{
    get dayss()
    {
        return $$('#months option');
    }
    days()
    {
        let list=this.dayss;
        for(var i=0;i<list.length;i++)
        {
            console.log(list[i]);
            var day=list[i];
            if(day.getText()==='June')
            {
                day.click();
            }
        }
    }
}
export default new dropdown(); 