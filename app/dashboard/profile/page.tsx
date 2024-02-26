import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import { getUser } from "../../../actions/get-user.server"

export default function Profile() {
  const secondaryNavigation = [
    { name: "Account", href: "#", current: true },
    { name: "Notifications", href: "#", current: false },
    { name: "Billing", href: "#", current: false },
    { name: "Teams", href: "#", current: false },
    { name: "Integrations", href: "#", current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }

  const [sidebarOpen, setSidebarOpen] = useState(false)
  //get the user profile

  return <div>Profile</div>
}
