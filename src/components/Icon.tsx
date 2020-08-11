import React from "react";

// @ts-ignore
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  // @ts-ignore
  importAll(require.context('icon', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

type Props = {
  id: string
}

const Icon = (props: Props) => {
  return (
      <svg>
        <use xlinkHref={`#${props.id}`}/>
      </svg>
  )
}

export default Icon
