import { createContext, useContext } from 'react';

type SectionNavigator = (sectionIndex: number) => void;

const NavigationContext = createContext<SectionNavigator | null>(null);

export function NavigationProvider({ value, children }: { value: SectionNavigator; children: React.ReactNode }) {
    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useSectionNavigator() {
    return useContext(NavigationContext);
}
