"use client"

import { useState } from "react"
import { RadioGroup } from "@headlessui/react"
import { CheckIcon } from "@heroicons/react/20/solid"

const frequencies = [
  { value: "monthly", label: "Mensuel", priceSuffix: "/mois" },
  { value: "annually", label: "Annuel", priceSuffix: "/an" },
]
const tiers = [
  {
    name: "Beginner",
    id: "tier-hobby",
    href: "#",
    price: { monthly: "€15", annually: "€144" },
    description: "L'essentiel pour apporter un service de qualité à vos clients.",
    features: ["5 formulaires actifs", "Jusqu'à 1,000 entrées", "Basic analytics"],
    mostPopular: false,
  },
  {
    name: "Freelancer",
    id: "tier-freelancer",
    href: "#",
    price: { monthly: "€30", annually: "€288" },
    description:
      "Allez encore plus loin dans le service que vous apportez à vos clients.",
    features: [
      "10 formulaires actifs",
      "Jusqu'à 5,000 entrées",
      "Basic analytics",
      "Réponse du support sous 48-heures",
    ],
    mostPopular: false,
  },
  {
    name: "Startup",
    id: "tier-startup",
    href: "#",
    price: { monthly: "€60", annually: "€576" },
    description: "Votre business grandit ? Voilà la solution.",
    features: [
      "25 formulaires actifs",
      "Up to 10,000 entrées",
      "Advanced analytics",
      "Réponse du support sous 24-heures",
      "Automatisation avancée",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    price: { monthly: "€90", annually: "€864" },
    description: "Support et infrastructure dédiées à votre entreprise.",
    features: [
      "formulaires illimités",
      "entrées illimités",
      "Advanced analytics",
      "Réponse du support sous 1-heure",
      "Automatisation avancée",
      "Outils de reporting personnalisés",
    ],
    mostPopular: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Pricing() {
  const [frequency, setFrequency] = useState(frequencies[0])

  return (
    <div className="bg-white dark:bg-neutral-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Prix</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Une formule pour toutes les équipes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-white">
          Choisissez le plan qui vous convient avec les meilleures fonctionnalités afin de
          répondre efficacement à vos clients et les fidéliser.
        </p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
          >
            <RadioGroup.Label className="sr-only">
              Fréquence des paiements
            </RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked
                      ? "bg-indigo-600 text-white"
                      : "text-gray-500 dark:text-white",
                    "cursor-pointer rounded-full px-2.5 py-1"
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? "ring-2 ring-indigo-600" : "ring-1 ring-gray-200",
                "rounded-3xl p-8"
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "text-indigo-600 dark:text-white"
                    : "text-gray-900 dark:text-white",
                  "text-lg font-semibold leading-8"
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-white">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {tier.price[frequency.value]}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-white">
                  {frequency.priceSuffix}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                    : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                  "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                Souscrire
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 dark:text-white">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
