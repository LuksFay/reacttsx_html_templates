import _ from "lodash";
import clsx from "clsx";
import { useRef, useState } from "react";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import Pagination from "../../base-components/Pagination";
import { FormInput, FormSelect } from "../../base-components/Form";
import TinySlider, {
  TinySliderElement,
} from "../../base-components/TinySlider";
import Lucide from "../../base-components/Lucide";
import Tippy from "../../base-components/Tippy";
import Litepicker from "../../base-components/Litepicker";
import ReportDonutChart from "../../components/ReportDonutChart";
import ReportLineChart from "../../components/ReportLineChart";
import ReportPieChart from "../../components/ReportPieChart";
import ReportDonutChart1 from "../../components/ReportDonutChart1";
import SimpleLineChart1 from "../../components/SimpleLineChart1";
import ReportMap from "../../components/ReportMap";
import { Menu } from "../../base-components/Headless";
import Table from "../../base-components/Table";

function Main() {
  const [salesReportFilter, setSalesReportFilter] = useState<string>();
  const importantNotesRef = useRef<TinySliderElement>();
  const prevImportantNotes = () => {
    importantNotesRef.current?.tns.goTo("prev");
  };
  const nextImportantNotes = () => {
    importantNotesRef.current?.tns.goTo("next");
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 2xl:col-span-9">
        <div className="grid grid-cols-12 gap-6">
          {/* BEGIN: General Report */}
          <div className="col-span-12 mt-8">
            <div className="flex items-center h-10 intro-y">
              <h2 className="mr-5 text-lg font-medium truncate">
                Panel General
              </h2>
              <a href="" className="flex items-center ml-auto text-primary">
                <Lucide icon="RefreshCcw" className="w-4 h-4 mr-3" /> Refrescar Pagina
              </a>
            </div>
          </div>
          {/* END: General Report */}
          {/* BEGIN: Weekly Top Products */}
          <div className="col-span-12 mt-6">
            <div className="items-center block h-10 intro-y sm:flex">
              <h2 className="mr-5 text-lg font-medium truncate">
                Tareas Semanales
              </h2>
              <div className="flex items-center mt-3 sm:ml-auto sm:mt-0">
                <Button className="flex items-center !box text-slate-600 dark:text-slate-300">
                  <Lucide
                    icon="FileText"
                    className="hidden w-4 h-4 mr-2 sm:block"
                  />
                  Descanso
                </Button>
                <Button className="flex items-center ml-3 !box text-slate-600 dark:text-slate-300">
                  <Lucide
                    icon="FileText"
                    className="hidden w-4 h-4 mr-2 sm:block"
                  />
                 Subir actualización
                </Button>
              </div>
            </div>
            <div className="mt-8 overflow-auto intro-y lg:overflow-visible sm:mt-0">
              <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th className="border-b-0 whitespace-nowrap">
                      IMAGES
                    </Table.Th>
                    <Table.Th className="border-b-0 whitespace-nowrap">
                      PRODUCT NAME
                    </Table.Th>
                    <Table.Th className="text-center border-b-0 whitespace-nowrap">
                      STOCK
                    </Table.Th>
                    <Table.Th className="text-center border-b-0 whitespace-nowrap">
                      STATUS
                    </Table.Th>
                    <Table.Th className="text-center border-b-0 whitespace-nowrap">
                      ACTIONS
                    </Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {_.take(fakerData, 4).map((faker, fakerKey) => (
                    <Table.Tr key={fakerKey} className="intro-x">
                      <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                        <div className="flex">
                          <div className="w-10 h-10 image-fit zoom-in">
                            <Tippy
                              as="img"
                              alt="Midone Tailwind HTML Admin Template"
                              className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                              src={faker.images[0]}
                              content={`Uploaded at ${faker.dates[0]}`}
                            />
                          </div>
                          <div className="w-10 h-10 -ml-5 image-fit zoom-in">
                            <Tippy
                              as="img"
                              alt="Midone Tailwind HTML Admin Template"
                              className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                              src={faker.images[1]}
                              content={`Uploaded at ${faker.dates[1]}`}
                            />
                          </div>
                          <div className="w-10 h-10 -ml-5 image-fit zoom-in">
                            <Tippy
                              as="img"
                              alt="Midone Tailwind HTML Admin Template"
                              className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                              src={faker.images[2]}
                              content={`Uploaded at ${faker.dates[2]}`}
                            />
                          </div>
                        </div>
                      </Table.Td>
                      <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                        <a href="" className="font-medium whitespace-nowrap">
                          {faker.products[0].name}
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {faker.products[0].category}
                        </div>
                      </Table.Td>
                      <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                        {faker.stocks[0]}
                      </Table.Td>
                      <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                        <div
                          className={clsx([
                            "flex items-center justify-center",
                            { "text-success": faker.trueFalse[0] },
                            { "text-danger": !faker.trueFalse[0] },
                          ])}
                        >
                          <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
                          {faker.trueFalse[0] ? "Active" : "Inactive"}
                        </div>
                      </Table.Td>
                      <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                        <div className="flex items-center justify-center">
                          <a className="flex items-center mr-3" href="">
                            <Lucide
                              icon="CheckSquare"
                              className="w-4 h-4 mr-1"
                            />
                            Edit
                          </a>
                          <a className="flex items-center text-danger" href="">
                            <Lucide icon="Trash2" className="w-4 h-4 mr-1" />{" "}
                            Delete
                          </a>
                        </div>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </div>
            <div className="flex flex-wrap items-center mt-3 intro-y sm:flex-row sm:flex-nowrap">
              <Pagination className="w-full sm:w-auto sm:mr-auto">
                <Pagination.Link>
                  <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                </Pagination.Link>
                <Pagination.Link>
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </Pagination.Link>
                <Pagination.Link>...</Pagination.Link>
                <Pagination.Link>1</Pagination.Link>
                <Pagination.Link active>2</Pagination.Link>
                <Pagination.Link>3</Pagination.Link>
                <Pagination.Link>...</Pagination.Link>
                <Pagination.Link>
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </Pagination.Link>
                <Pagination.Link>
                  <Lucide icon="ChevronsRight" className="w-4 h-4" />
                </Pagination.Link>
              </Pagination>
              <FormSelect className="w-20 mt-3 !box sm:mt-0">
                <option>10</option>
                <option>25</option>
                <option>35</option>
                <option>50</option>
              </FormSelect>
            </div>
          </div>
          {/* END: Weekly Top Products */}
        </div>
      </div>
      <div className="col-span-12 2xl:col-span-3">
        <div className="pb-10 -mb-10 2xl:border-l">
          <div className="grid grid-cols-12 2xl:pl-6 gap-x-6 2xl:gap-x-0 gap-y-6">
            {/* BEGIN: Transactions */}
            <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12 2xl:mt-8">
              <div className="flex items-center h-10 intro-x">
                <h2 className="mr-5 text-lg font-medium truncate">
                  Transactions
                </h2>
              </div>
              <div className="mt-5">
                {_.take(fakerData, 5).map((faker, fakerKey) => (
                  <div key={fakerKey} className="intro-x">
                    <div className="flex items-center px-5 py-3 mb-3 box zoom-in">
                      <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          src={faker.photos[0]}
                        />
                      </div>
                      <div className="ml-4 mr-auto">
                        <div className="font-medium">{faker.users[0].name}</div>
                        <div className="text-slate-500 text-xs mt-0.5">
                          {faker.dates[0]}
                        </div>
                      </div>
                      <div
                        className={clsx({
                          "text-success": faker.trueFalse[0],
                          "text-danger": !faker.trueFalse[0],
                        })}
                      >
                        {faker.trueFalse[0] ? "+" : "-"}${faker.totals[0]}
                      </div>
                    </div>
                  </div>
                ))}
                <a
                  href=""
                  className="block w-full py-3 text-center border border-dotted rounded-md intro-x border-slate-400 dark:border-darkmode-300 text-slate-500"
                >
                  View More
                </a>
              </div>
            </div>
            {/* END: Transactions */}
            {/* BEGIN: Recent Activities */}
            <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12">
              <div className="flex items-center h-10 intro-x">
                <h2 className="mr-5 text-lg font-medium truncate">
                  Recent Activities
                </h2>
                <a href="" className="ml-auto truncate text-primary">
                  Show More
                </a>
              </div>
              <div className="mt-5 relative before:block before:absolute before:w-px before:h-[85%] before:bg-slate-200 before:dark:bg-darkmode-400 before:ml-5 before:mt-5">
                <div className="relative flex items-center mb-3 intro-x">
                  <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                    <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        src={fakerData[9].photos[0]}
                      />
                    </div>
                  </div>
                  <div className="flex-1 px-5 py-3 ml-4 box zoom-in">
                    <div className="flex items-center">
                      <div className="font-medium">
                        {fakerData[9].users[0].name}
                      </div>
                      <div className="ml-auto text-xs text-slate-500">
                        07:00 PM
                      </div>
                    </div>
                    <div className="mt-1 text-slate-500">
                      Has joined the team
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center mb-3 intro-x">
                  <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                    <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        src={fakerData[8].photos[0]}
                      />
                    </div>
                  </div>
                  <div className="flex-1 px-5 py-3 ml-4 box zoom-in">
                    <div className="flex items-center">
                      <div className="font-medium">
                        {fakerData[8].users[0].name}
                      </div>
                      <div className="ml-auto text-xs text-slate-500">
                        07:00 PM
                      </div>
                    </div>
                    <div className="text-slate-500">
                      <div className="mt-1">Added 3 new photos</div>
                      <div className="flex mt-2">
                        <Tippy
                          as="div"
                          className="w-8 h-8 mr-1 image-fit zoom-in"
                          content={fakerData[0].products[0].name}
                        >
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            className="border border-white rounded-md"
                            src={fakerData[8].images[0]}
                          />
                        </Tippy>
                        <Tippy
                          as="div"
                          className="w-8 h-8 mr-1 image-fit zoom-in"
                          content={fakerData[1].products[0].name}
                        >
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            className="border border-white rounded-md"
                            src={fakerData[8].images[1]}
                          />
                        </Tippy>
                        <Tippy
                          as="div"
                          className="w-8 h-8 mr-1 image-fit zoom-in"
                          content={fakerData[2].products[0].name}
                        >
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            className="border border-white rounded-md"
                            src={fakerData[8].images[2]}
                          />
                        </Tippy>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-4 text-xs text-center intro-x text-slate-500">
                  12 November
                </div>
                <div className="relative flex items-center mb-3 intro-x">
                  <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                    <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        src={fakerData[7].photos[0]}
                      />
                    </div>
                  </div>
                  <div className="flex-1 px-5 py-3 ml-4 box zoom-in">
                    <div className="flex items-center">
                      <div className="font-medium">
                        {fakerData[7].users[0].name}
                      </div>
                      <div className="ml-auto text-xs text-slate-500">
                        07:00 PM
                      </div>
                    </div>
                    <div className="mt-1 text-slate-500">
                      Has changed{" "}
                      <a className="text-primary" href="">
                        {fakerData[7].products[0].name}
                      </a>{" "}
                      price and description
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center mb-3 intro-x">
                  <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                    <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        src={fakerData[6].photos[0]}
                      />
                    </div>
                  </div>
                  <div className="flex-1 px-5 py-3 ml-4 box zoom-in">
                    <div className="flex items-center">
                      <div className="font-medium">
                        {fakerData[6].users[0].name}
                      </div>
                      <div className="ml-auto text-xs text-slate-500">
                        07:00 PM
                      </div>
                    </div>
                    <div className="mt-1 text-slate-500">
                      Has changed{" "}
                      <a className="text-primary" href="">
                        {fakerData[6].products[0].name}
                      </a>{" "}
                      description
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Recent Activities */}
            {/* BEGIN: Schedules */}
            <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12 xl:col-start-1 xl:row-start-2 2xl:col-start-auto 2xl:row-start-auto">
              <div className="flex items-center h-10 intro-x">
                <h2 className="mr-5 text-lg font-medium truncate">Schedules</h2>
                <a
                  href=""
                  className="flex items-center ml-auto truncate text-primary"
                >
                  <Lucide icon="Plus" className="w-4 h-4 mr-1" /> Add New
                  Schedules
                </a>
              </div>
              <div className="mt-5">
                <div className="intro-x box">
                  <div className="p-5">
                    <div className="flex">
                      <Lucide
                        icon="ChevronLeft"
                        className="w-5 h-5 text-slate-500"
                      />
                      <div className="mx-auto text-base font-medium">April</div>
                      <Lucide
                        icon="ChevronRight"
                        className="w-5 h-5 text-slate-500"
                      />
                    </div>
                    <div className="grid grid-cols-7 gap-4 mt-5 text-center">
                      <div className="font-medium">Su</div>
                      <div className="font-medium">Mo</div>
                      <div className="font-medium">Tu</div>
                      <div className="font-medium">We</div>
                      <div className="font-medium">Th</div>
                      <div className="font-medium">Fr</div>
                      <div className="font-medium">Sa</div>
                      <div className="py-0.5 rounded relative text-slate-500">
                        29
                      </div>
                      <div className="py-0.5 rounded relative text-slate-500">
                        30
                      </div>
                      <div className="py-0.5 rounded relative text-slate-500">
                        31
                      </div>
                      <div className="py-0.5 rounded relative">1</div>
                      <div className="py-0.5 rounded relative">2</div>
                      <div className="py-0.5 rounded relative">3</div>
                      <div className="py-0.5 rounded relative">4</div>
                      <div className="py-0.5 rounded relative">5</div>
                      <div className="py-0.5 bg-success/20 dark:bg-success/30 rounded relative">
                        6
                      </div>
                      <div className="py-0.5 rounded relative">7</div>
                      <div className="py-0.5 bg-primary text-white rounded relative">
                        8
                      </div>
                      <div className="py-0.5 rounded relative">9</div>
                      <div className="py-0.5 rounded relative">10</div>
                      <div className="py-0.5 rounded relative">11</div>
                      <div className="py-0.5 rounded relative">12</div>
                      <div className="py-0.5 rounded relative">13</div>
                      <div className="py-0.5 rounded relative">14</div>
                      <div className="py-0.5 rounded relative">15</div>
                      <div className="py-0.5 rounded relative">16</div>
                      <div className="py-0.5 rounded relative">17</div>
                      <div className="py-0.5 rounded relative">18</div>
                      <div className="py-0.5 rounded relative">19</div>
                      <div className="py-0.5 rounded relative">20</div>
                      <div className="py-0.5 rounded relative">21</div>
                      <div className="py-0.5 rounded relative">22</div>
                      <div className="py-0.5 bg-pending/20 dark:bg-pending/30 rounded relative">
                        23
                      </div>
                      <div className="py-0.5 rounded relative">24</div>
                      <div className="py-0.5 rounded relative">25</div>
                      <div className="py-0.5 rounded relative">26</div>
                      <div className="py-0.5 bg-primary/10 dark:bg-primary/50 rounded relative">
                        27
                      </div>
                      <div className="py-0.5 rounded relative">28</div>
                      <div className="py-0.5 rounded relative">29</div>
                      <div className="py-0.5 rounded relative">30</div>
                      <div className="py-0.5 rounded relative text-slate-500">
                        1
                      </div>
                      <div className="py-0.5 rounded relative text-slate-500">
                        2
                      </div>
                      <div className="py-0.5 rounded relative text-slate-500">
                        3
                      </div>
                      <div className="py-0.5 rounded relative text-slate-500">
                        4
                      </div>
                      <div className="py-0.5 rounded relative text-slate-500">
                        5
                      </div>
                      <div className="py-0.5 rounded relative text-slate-500">
                        6
                      </div>
                      <div className="py-0.5 rounded relative text-slate-500">
                        7
                      </div>
                      <div className="py-0.5 rounded relative text-slate-500">
                        8
                      </div>
                      <div className="py-0.5 rounded relative text-slate-500">
                        9
                      </div>
                    </div>
                  </div>
                  <div className="p-5 border-t border-slate-200/60">
                    <div className="flex items-center">
                      <div className="w-2 h-2 mr-3 rounded-full bg-pending"></div>
                      <span className="truncate">UI/UX Workshop</span>
                      <span className="font-medium xl:ml-auto">23th</span>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="w-2 h-2 mr-3 rounded-full bg-primary"></div>
                      <span className="truncate">
                        VueJs Frontend Development
                      </span>
                      <span className="font-medium xl:ml-auto">10th</span>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="w-2 h-2 mr-3 rounded-full bg-warning"></div>
                      <span className="truncate">Laravel Rest API</span>
                      <span className="font-medium xl:ml-auto">31th</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Schedules */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
