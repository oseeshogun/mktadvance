import StacksLoader from "@/components/shared/stacks-loader"

const PageSuspense = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center ">
      <StacksLoader />
    </div>
  )
}

export default PageSuspense
