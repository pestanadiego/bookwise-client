export default function From(){
    return(
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="px-7 text-lg font-medium leading-6 text-gray-900">Información del Hotel</h3>
                </div>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                          <label for="name_hotel" class="block text-sm font-medium text-gray-700">Nombre Hotel</label>
                          <input type="text" name="name_hotel" id="name_hotel" autocomplete="nombre-hotel" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label for="manager" class="block text-sm font-medium text-gray-700">Nombre Manager</label>
                          <input type="text" name="manager" id="manager" autocomplete="manager" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>

                        <div class="col-span-6 sm:col-span-4">
                          <label for="address" class="block text-sm font-medium text-gray-700">dirección</label>
                          <input type="text" name="address" id="address" autocomplete="address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-50 shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>

                        <div class="col-span-6">
                          <label for="rating" class="block text-sm font-medium text-gray-700">Rating</label>
                          <input type="text" name="rating" id="rating" autocomplete="rating" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-50 shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>

                        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label for="nro_hab" class="block text-sm font-medium text-gray-700">Número de Habitaciones</label>
                          <input type="text" name="nro_hab" id="nro_hab" autocomplete="nro_hab" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-50 shadow-sm sm:text-sm border-gray-300 rounded-md"/>
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