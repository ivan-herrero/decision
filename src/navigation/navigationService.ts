import { NavigationContainerComponent, NavigationParams, StackActions } from 'react-navigation'

let navigator: NavigationContainerComponent | null

function setTopLevelNavigator(navigatorRef: NavigationContainerComponent | null): void {
  navigator = navigatorRef
}

function navigate(routeName: string, params?: NavigationParams): void {
  if (navigator) {
    navigator.dispatch(
      StackActions.push({
        routeName,
        params
      })
    )
  }
}

function navigateToPreviousScreen(): void {
  if (navigator) {
    navigator.dispatch(
      StackActions.pop({ n: 1 })
    )
  }
}

const screensMap: Map<number, string> = new Map([
  [0, 'Decision'],
  [1, 'Factor',],
  [2, 'Option',],
  [3, 'Score',],
  [4, 'Summary'],
])

function nextScreen(currentNavIndex: number): string {
  const nextIndex = currentNavIndex + 1
  return (screensMap.has(nextIndex) ? screensMap.get(nextIndex) : screensMap.get(0)) as string
}

function navigateToNextScreen(currentNavIndex: number): void {
  navigate(nextScreen(currentNavIndex))
}

export default {
  setTopLevelNavigator,
  navigateToNextScreen,
  navigateToPreviousScreen
}
