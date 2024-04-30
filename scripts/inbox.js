const fake_actions = [{
  id: 1,
  status: 'to do',
  description: 'Feed the cats'
},
{
  id: 2,
  status: 'to do',
  description: 'Eat some vegetables'
},
{
  id: 3,
  status: 'to do',
  description: 'Email an annoying person'
},
{
  id: 4,
  status: 'to do',
  description: 'Look up cool hotels in London'
},
{
  id: 5,
  status: 'to do',
  description: 'Rewrite data analysis pipeline for new data'
}]

const actions_list = document.getElementById('actions_list')
console.log(actions_list)
fake_actions.forEach(action => {
  const action_item = document.createElement('div')
  action_item.className = "action_item"
  action_item.id = `action_${action.id}`
  console.log(action_item.className)
  const action_text = document.createElement('p')
  action_text.innerText = action.description
  const checkbox = document.createElement('input')
  checkbox.type = "checkbox"

  action_item.appendChild(checkbox)
  action_item.appendChild(action_text)
  actions_list.appendChild(action_item)
});