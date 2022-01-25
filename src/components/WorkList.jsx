import {WorkItem} from './WorkItem'

function WorkList({workList = []}) {
  return <div className="work_content">
    {workList.map((el) => (
        <WorkItem key={el.id} {...el} imgProject={require(`../img/projects/${el.linkImage}.jpg`)} />
      ))}
  </div>
}

export {WorkList}