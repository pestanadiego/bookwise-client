import Link from 'next/link';

export default function FromHabitaciones(){
    return(
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="px-7 text-lg font-medium leading-6 text-gray-900">Información de la Habitación</h3>
                </div>
                <br/>
                <Link href="/">
                    <button  className="w-50 mx-1 py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Volver
                    </button>
                </Link>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                          <label for="tipo-hab" class="block text-sm font-medium text-gray-700">Tipo de Habitación</label>
                          <input type="text" name="tipo-hab" id="tipo-hab" autocomplete="tipo-hab" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label for="tamano" class="block text-sm font-medium text-gray-700">Tamaño</label>
                          <input type="text" name="tamano" id="tamano" autocomplete="tamano" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>

                        <div class="col-span-6 sm:col-span-4">
                          <label for="num-camas" class="block text-sm font-medium text-gray-700">Número de Camas</label>
                          <input type="text" name="num-camas" id="num-camas" autocomplete="num-camas" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-50 shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>

                        <div class="col-span-6">
                          <label for="limite-personas" class="block text-sm font-medium text-gray-700">Límite de Personas</label>
                          <input type="text" name="limite-personas" id="limite-personas" autocomplete="limite-personas" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-30 shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>

                        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label for="cant-hab" class="block text-sm font-medium text-gray-700">Cantidad de Habitaciones</label>
                          <input type="text" name="cant-hab" id="cant-hab" autocomplete="cant-hab" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-50 shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Guardar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </div>
    )
}