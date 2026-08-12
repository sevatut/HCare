export default function Tabs( {tabs, onChange} ) {
    return (
    <nav>
        <ul>
            {tabs.map((tab) => (
                <li key={tab}>
                    <button onClick={() => onChange(tab)}>{tab}</button>
                </li>
            ))}
        </ul>
    </nav>
    )
}