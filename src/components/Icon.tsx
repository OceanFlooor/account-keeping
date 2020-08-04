import React from "react";

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('icon', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

type Props = {
  fill: string,
  id: string
}

const Icon = (props: Props) => {
  return (
      <svg fill={`#${props.fill}`}>
        <use xlinkHref={`#${props.id}`}/>
      </svg>
  )
}

export default Icon
