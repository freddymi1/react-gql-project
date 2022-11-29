import StackCard from './StackCard/StackCard';
import SubscriptionCard from "./SubscriptionCard/SubscriptionCard";

export const CatalogComponent = ({ paths }) => {
	return (
		<>
			<div className="w-full h-screen overflow-y-scroll pb-40 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
					<h2 className="text-gray-500 font-bold text-center py-12">NOS ABONNEMENTS</h2>
					<div className="flex flex-row space-x-12 justify-center mt-8">
				
						<SubscriptionCard />
						<SubscriptionCard />
						
					</div>

					<h2 className="text-gray-500 font-bold text-center py-12 mt-40">NOS STACKS</h2>
					<div className="flex flex-row space-x-8 justify-center mt-12">

						{
							paths.map( path => (
								<StackCard key={ path.id } path={ path } />
							) )
						}

					</div>
				</div>
			</div>
		</>
	)
}