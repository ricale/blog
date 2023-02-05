const highlightClass = "highlight";

function highlightCurrentHeading(
  containerRef: React.MutableRefObject<HTMLDivElement | undefined>,
  headingElements: NodeListOf<HTMLElement> | undefined
) {
  if (!headingElements) {
    return;
  }

  const offset = 10;
  const scrollTop =
    document.documentElement.scrollTop +
    offset -
    (containerRef.current?.offsetTop ?? 0);

  let targetHeading;
  for (let i = 0; i < headingElements.length; i++) {
    if (headingElements[i].offsetTop > scrollTop) {
      targetHeading = headingElements[i - 1] ?? null;
      break;
    }
  }
  if (targetHeading === undefined) {
    targetHeading = headingElements[headingElements.length - 1];
  }

  containerRef.current
    ?.querySelectorAll(`.${highlightClass}`)
    .forEach((element) => element.classList.remove(highlightClass));

  if (targetHeading) {
    const targetId = targetHeading.getAttribute("id");
    const linkSelector = `.toc a[href='#${encodeURI(targetId ?? "")}']`;
    const linkElement = containerRef.current?.querySelector(linkSelector);
    linkElement?.classList.add(highlightClass);
  }
  return;
}

export default highlightCurrentHeading;
