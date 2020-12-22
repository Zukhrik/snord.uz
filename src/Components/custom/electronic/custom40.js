import React from 'react'

export const Custom40 = () => (
    <div className="wrapper">
        <div className="product-info">
            <div className="table-responsive">
                <table>
                    <thead>
                        <tr className="table-head">
                            <th className="description"></th>
                            <th>SRV 3/3-3</th>
                            <th>SRV 3/3-6</th>
                            <th>SRV 3/3-10,5</th>
                            <th>SRV 3/3-15</th>
                            <th>SRV 3/3-22,5</th>
                            <th>SRV 3/3-30</th>
                            <th>SRV 3/3-45</th>
                            <th>SRV 3/3-60</th>
                            <th>SRV 3/3-75</th>
                            <th>SRV 3/3-100</th>
                            <th>SRV 3/3-120</th>
                            <th>SRV 3/3-150</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="description">МОЩНОСТЬ (КВА)</td>
                            <td>3</td>
                            <td>6</td>
                            <td>10,5</td>
                            <td>15</td>
                            <td>22,5</td>
                            <td>30</td>
                            <td>45</td>
                            <td>60</td>
                            <td>75</td>
                            <td>100</td>
                            <td>120</td>
                            <td>150</td>
                        </tr>
                        <tr>
                            <td className="table-head description">ВХОД</td>
                            <td colSpan="12" className="table-head"></td>
                        </tr>
                        <tr>
                            <td className="description">НАПРЯЖЕНИЕ</td>
                            <td colSpan="4">1190-485 VAC</td>
                            <td colSpan="4">275-450 190-485</td>
                            <td colSpan="4">VAC 310-450 VAC</td>
                        </tr>
                        <tr>
                            <td className="description">ДИАПАЗОН ВХОДНОГО НАПРЯЖЕНИЯ</td>
                            <td colSpan="12">155-490 VAC</td>
                        </tr>
                        <tr>
                            <td className="description">РАБОЧАЯ ЧАСТОТА</td>
                            <td colSpan="12">47-65 HZ</td>
                        </tr>
                        <tr>
                            <td className="description">БЛОК ЗАЩИТЫ СЕТИ</td>
                            <td colSpan="12">ЗАЩИТА ОТ НИЗКОГО И ВЫСОКОГО НАПРЯЖЕНИЯ (ПО ЗАПРОСУ)</td>
                        </tr>
                        <tr>
                            <td className="description table-head">ВЫХОД</td>
                            <td className="table-head" colSpan="12"></td>
                        </tr>
                        <tr>
                            <td className="description">НАПРЯЖЕНИЕ</td>
                            <td colSpan="12">380/400/415 VAC RMS ± %2</td>
                        </tr>
                        <tr>
                            <td className="description">ПЕРЕГРУЗКА</td>
                            <td colSpan="12">10 СЕКУНД ПРИ% 200 НАГРУЗКЕ</td>
                        </tr>
                        <tr>
                            <td className="description">СКОРОСТЬ КОРРЕКЦИИ</td>
                            <td colSpan="12">~90 ВОЛЬТ / СЕК</td>
                        </tr>
                        <tr>
                            <td className="description">ВРЕМЯ ВОССТАНОВЛЕНИЯ</td>
                            <td colSpan="12">~ 90 ВОЛЬТ / СЕК ( В РАЗНИЦЕ МЕЖДУ 160 VAC - 260 VAC)</td>
                        </tr>
                        <tr>
                            <td className="description">ЗАЩИТА ВЫХОДА</td>
                            <td colSpan="12">ЗАЩИТА НАГРУЗКИ ПУТЕМ РАЗМЫКАНИЯ ЦЕПИ</td>
                        </tr>
                        <tr>
                            <td className="description table-head">ОБЩЕЕ</td>
                            <td colSpan="12" className="table-head"></td>
                        </tr>
                        <tr>
                            <td className="description">СИСТЕМА ОХЛАЖДЕНИЯ</td>
                            <td colSpan="12">УМНАЯ СИСТЕМА ВЕНТИЛЯЦИИ</td>
                        </tr>
                        <tr>
                            <td className="description">КОНТРОЛЬ ИЗМЕРЕННОГО ЗНАЧЕНИЯ</td>
                            <td colSpan="12">ПАНЕЛЬ TRUE RMS ВЫХОДНОЕ НАПРЯЖЕНИЕ VOLTMATER (74X74 ММ), КОНТРОЛЬ НАПРЯЖЕНИЯ ПИТАНИЯ</td>
                        </tr>
                        <tr>
                            <td className="description">ГАРМОНИЧЕСКОЕ ИСКАЖЕНИЕ</td>
                            <td colSpan="12">-</td>
                        </tr>
                        <tr>
                            <td className="description">ОБЩАЯ ПРОИЗВОДИТЕЛЬНОСТЬ</td>
                            <td colSpan="12">{`> %95`}</td>
                        </tr>
                        <tr>
                            <td className="description">МЕХАНИЧЕСКИЙ BYPASS</td>
                            <td colSpan="12">СЕЛЕКТОР РЕГУЛЯТОРА НАПРЯЖЕНИЯ СЕТИ С РУЧНЫМ УПРАВЛЕНИЕМ PAKO ПЕРЕКЛЮЧАТЕЛЬ / ВЫКЛЮЧАТЕЛЬ OFF / ON</td>
                        </tr>
                        <tr>
                            <td className="description">КЛАСС ЗАЩИТЫ</td>
                            <td colSpan="12">IP 20 ( ОСТАЛЬНЫЕ ПО ЗАПРОСУ)</td>
                        </tr>
                        <tr>
                            <td className="description table-head">ОКРУЖАЮЩАЯ СРЕДА</td>
                            <td className="table-head" colSpan="12"></td>
                        </tr>
                        <tr>
                            <td className="description">РАБОЧАЯ ТЕМПЕРАТУРА</td>
                            <td colSpan="12">-10 °C- +50 °C</td>
                        </tr>
                        <tr>
                            <td className="description">ТЕМПЕРАТУРА ХРАНЕНИЯ</td>
                            <td colSpan="12">-25°C ; +60°C</td>
                        </tr>
                        <tr>
                            <td className="description">ОТНОСИТЕЛЬНАЯ ВЛАЖНОСТЬ</td>
                            <td colSpan="12">{`< % 90 DIN (40040)`}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
)