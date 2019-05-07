import { shallowMount } from '@vue/test-utils'
import UserView from '@/views/UserView'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'

// testar se o componente está renderizando
describe('UserView', () => {
  it('renders the component', () => {
    // arrange
    const wrapper = shallowMount(UserView)
    
    //assert
    expect(wrapper.html()).toMatchSnapshot()
  })


  it('renders main child components', () => {
    const wrapper = shallowMount(UserView)
    const userSearchForm = wrapper.find(VUserSearchForm)
    const userProfile = wrapper.find(VUserProfile)

    expect(userSearchForm.exists()).toBe(true)
    expect(userProfile.exists()).toBe(true)
    

  })
})