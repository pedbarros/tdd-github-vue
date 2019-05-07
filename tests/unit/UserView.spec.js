import { shallowMount } from '@vue/test-utils'
import UserView from '@/views/UserView'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'

// testar se o componente está renderizando
describe('UserView', () => {

  const build = () => {
    const wrapper = shallowMount(UserView)

    return {
      wrapper,
      userSearchForm: () => wrapper.find(VUserSearchForm),
      userProfile: () => wrapper.find(VUserProfile)
    }
  }

  it('renders the component', () => {
    // arrange
    const { wrapper } = build() 
    //assert
    expect(wrapper.html()).toMatchSnapshot()
  })


  it('renders main child components', () => { 
    const {userSearchForm, userProfile} =  build() 

    expect(userSearchForm().exists()).toBe(true)
    expect(userProfile().exists()).toBe(true)


  })

  it('passes a binded user prop to user profile component', () => {
    const { wrapper, userProfile } = build()

    wrapper.setData({
      user: {
        name: 'Pedro'
      }
    })

   // expect(userProfile().vm.user).toBe(wrapper.vm.user)
    expect(userProfile().vm.user).toBe(wrapper.vm.user)
  })
})